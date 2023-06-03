const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const path = require("path");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Configuração do mecanismo de visualização handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Rota para renderizar o arquivo home.handlebars
app.get("/", (req, res) => {
  res.render("layouts/home");
});

app.get("/Login", (req, res) => {
  res.render("layouts/login");
});

//Tentativa de pegar o email e senha

app.post("/Registro/insertinfoUsers", (req, res) => {
  const nome = req.body.nomeC;
  const email = req.body.emailC;
  const senha = req.body.senhaC;

  const sql = ` INSERT INTO infoUsers (nome, email, senha) VALUES (?, ?, ?) `;
  conn.query(sql,[nome, email, senha], function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  // Consulta SQL para verificar se o usuário existe e as credenciais estão corretas
  const sql = `SELECT * FROM infoUsers WHERE email = ? AND senha = ?`;
  conn.query(sql, [email, senha], (err, resultados) => {
    if (err) {
      console.error('Erro ao realizar o login: ' + err);

      res.redirect('/login'); // Redireciona de volta para a página de login em caso de erro
    } else {
      if (resultados.length > 0) {
        // Armazena o id do usuario que entrou
        req.session.user_id = resultados[0].id_u;
        // Login bem-sucedido, redireciona para a página principal ou outra página desejada
        res.redirect('/');
      } else {
        // Credenciais inválidas, redireciona de volta para a página de login com uma mensagem de erro
        res.render('layouts/login', { error: 'Email ou senha inválidos' });
      }
    }
  });
});


app.get('/Planos', function(req, res) {
  const userId = req.session.user_id;

  // Consulta SQL para selecionar todos os planos na tabela 'planos'
  const sql = 'SELECT * FROM planos WHERE user_id = ?';

  // Executa a consulta usando o módulo mysql
  conn.query(sql,[userId],function(err, results) {
    if (err) {
      console.error('Erro ao obter os planos do usuário: ' + err);
      res.sendStatus(500);
    } else {
    
    // Renderiza a página Planos.handlebars com os planos como variável
    res.render('layouts/planos', { planos: results });
    }
  });
});

// Envia para o mysql

app.post("/planos/insertafazeres", function (req, res) {
  const novoPlano = req.body.planos;
  const userId = req.session.user_id;

  conn.query(
    "INSERT INTO planos (tarefas, user_id) VALUES (?, ?)",
    [novoPlano, userId],
    function (error, results) {
      if (error) throw error;

      console.log("Novo plano inserido no banco de dados");
    }
  );

  res.redirect("/Planos");
});

// Rota para excluir uma tarefa existente
app.post('/Planos/excluir/:id', (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM planos WHERE id = ? `;
  conn.query(sql,id, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Tarefa excluída com sucesso');
    res.redirect("/Planos");
  });
});

// Rota para atualizar uma tabela

app.post('/planos/atualizar/:id', (req, res) => {
  const id = req.body.id;
  const novoPlano = req.body.novoPlano;

  console.log(req.body.id);
  console.log(req.body.novoPlano);

  // Consulta SQL para atualizar o plano com o ID fornecido
  const sql = 'UPDATE planos SET tarefas = ? WHERE id = ?';

  // Executa a consulta SQL
  conn.query(sql, [novoPlano, id], (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else if (result.affectedRows === 0) {
      console.log('Nenhum registro foi afetado pela atualização');
      res.sendStatus(404);
    } else {
      console.log('Tarefa atualizada com sucesso');
      res.redirect('/Planos');
    }
  });
});

// Rota para deslogar (fazer logout) do usuário
app.get('/logout', (req, res) => {
  // Limpa a sessão do usuário
  req.session.destroy((err) => {
    if (err) {
      console.error('Erro ao encerrar a sessão: ' + err);
    }
    // Redireciona para a página de login ou qualquer outra página desejada após o logout
    res.redirect('/login');
  });
});


const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "banquinho",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Conectado ao MySQL");
  app.listen(3000);
});
