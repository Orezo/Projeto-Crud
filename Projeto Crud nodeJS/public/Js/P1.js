// const w1 = document.querySelector('.w1');

// const linkLogin = document.querySelector('.voltarLogin');

// const linkCadastro = document.querySelector('.criarConta');

// const butaoPopUp = document.querySelector('.btnLog-popUp');

// const botaoFechar = document.querySelector('.butaoFechar');


// linkCadastro.addEventListener('click', ()=> {
//     w1.classList.add('active');
// });

// linkLogin.addEventListener('click', ()=> {
//     w1.classList.remove('active');
// });

// butaoPopUp.addEventListener('click', ()=> {
//     w1.classList.add('active-PopUp');
// });

// botaoFechar.addEventListener('click', ()=> {
//     w1.classList.remove('active-PopUp');
// });

function fazerlog(){
    window.location.href="/Login"
};


// // Parte da lista de planejamento 

// const addPlanT = document.querySelector('.addPlanT') ;
// const botaoAddPlan = document.querySelector('.addPlan');
// const ListaP = document.querySelector('.ListaPlanejamento');



// botaoAddPlan.addEventListener('click', addLista);

// ListaP.addEventListener('click', completaApagar);



// function addLista(add){
//     add.preventDefault();

//     //criando Div no html

//     const faltaDiv = document.createElement('div');
//     faltaDiv.classList.add("faltaCumprir");
    
//     //Criando itens da lista 

//     const novaLista = document.createElement('li');
//     novaLista.innerText = addPlanT.value;
//     novaLista.classList.add('listaFalta');
//     //pondo a nova lista dentro da div
//     faltaDiv.appendChild(novaLista);

//     // criando botão tarefa completada

//     const completoBotao = document.createElement('button');
//     completoBotao.innerHTML = '<ion-icon name="checkmark-circle" class="checked"></ion-icon>';
//     completoBotao.classList.add("taskCompletada");
//     //pondo o botao dentro da div
//     faltaDiv.appendChild(completoBotao);

//     // Criando botao editar

//     const editBotao = document.createElement('button');
//     editBotao.innerHTML = '<ion-icon name="create" class="editB"></ion-icon>'
//     editBotao.classList.add("ediTask")
//     // Pondo dentro da div
//     faltaDiv.appendChild(editBotao);

//     // Criando botão lixeira

//     const lixeiraBotao = document.createElement('button');
//     lixeiraBotao.innerHTML = '<ion-icon name="trash" class="trash"></ion-icon>';
//     lixeiraBotao.classList.add("excluiTask");
//     //pondo o botao dentro da div
//     faltaDiv.appendChild(lixeiraBotao);


//     // Jogando dentro do local certo

//     ListaP.appendChild(faltaDiv);

//     //Limpar a caixa de texto

//     addPlanT.value = "";
// }

// function completaApagar(evento) {
//     const qual = evento.target;

//     //Apagar plano
//     if(qual.classList[0] === "excluiTask"){
//         const plan = qual.parentElement;
//         // Animação do youtube
//         plan.classList.add("vala");
//         plan.addEventListener('transitionend', function (){
//             plan.remove();
//         })
//     }

//     //Plano completo
//     if(qual.classList[0] === "taskCompletada"){
//         const plan = qual.parentElement;
//         plan.classList.toggle('Completado');
//     }   
// }

// // Opções de planos feitos / não feitos
