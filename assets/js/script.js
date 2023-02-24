let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let mexer = document.querySelector('.social')

nome.style.width='100%'
email.style.width='100%'
.indexOf()
function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome Iválido !'
        txt.style.color = "red"
        nomeOk = false
        txt.style.display = 'block'
    }else{
        txt.innerHTML ='Nome Válido'
        txt.style.color = "green"
        nomeOk = true
        txt.style.display = 'none'
    }
}
function validaEmail2() {
    // criação do padrão de email, vai aceitar caracteres + @ + caracteres + . + 2 ou 3 caracteres pra finalizar
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
  
    // o if será feito de uma forma diferente, verificando se o que a pessoa digitou condiz com o padrão do e-mail (match)
    // caso de certo, e-mail válido, senão, e-mail inválido
    if(email.value.match(regex)) {
      txtEmail.innerHTML = 'E-mail válido'
      txtEmail.style.color = 'green'
      emailOk = true
    } else {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
      emailOk = false
      
      
    }
  }

  function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=100){
    txtAssunto.innerHTML = 'Texto muito grande, limite de 100'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
    assuntoOk = false
    }else{
        txtAssunto.innerHTML = 'Texto Válido'
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
  }

  function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Formulário enviado')
  }
  else{
    alert('Formulário incorreto')
  }
}

function zoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function normal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'

}

function mexer(){
    mexer.style.backgroundColor = 'red'

}

function imgNormal(){
    mexer.style.backgroundColor = 'rgba(206, 206, 206, 0.145)'
}
