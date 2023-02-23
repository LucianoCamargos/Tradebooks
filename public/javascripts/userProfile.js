

const title = document.getElementById('strong-title')
const formCadastro = document.querySelector('.container-cadastro')
const formEndereco = document.querySelector('.container-endereco')
const formAutentica = document.querySelector('.autenticar')
const myStore = document.querySelector('.my-store')
const btnNavs = document.querySelectorAll('#btn-navs')
const editar = document.querySelector('.edit-user')
const formUser = document.querySelector('.form-user')
const infoUser = document.querySelector('.container-dados')
const btnCancelar = document.getElementById('btnCancelar')
const meusPedidos = document.querySelector('.meusPedidos')

const nav = document.querySelector('nav')
//quando estiver na pagina de usuário mudar position do nav para absolute
nav.style.position = 'absolute'

const listTitle = []



editar.addEventListener('click', ()=>{


    formUser.style.display = "flex"
    infoUser.style.display = "none"

})
btnCancelar.addEventListener('click',()=>{
  formUser.style.display = "none"
    infoUser.style.display = "flex"
   
})

btnNavs.forEach(event => {
  listTitle.push(event.innerText)
  console.log(listTitle)
  event.addEventListener('click', () => {
    title.innerText = event.innerText
    
    event.style.borderLeft = 'none'
    for (let i = 0; i < listTitle.length; i++) {

      btnNavs[i].style.borderLeft = 'none'

    }

    if (title.innerText == listTitle[0]) {

      btnNavs[0].style.borderLeft = 'solid #1C98ED'
      formCadastro.style.display = 'none'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'none'
      myStore.style.display = 'none'
      meusPedidos.style.display = 'flex'

    } else if (title.innerText == listTitle[1]) {
      
      btnNavs[1].style.borderLeft = 'solid #1C98ED'
      formCadastro.style.display = 'flex'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'none'
      myStore.style.display = 'none'

    } else if (title.innerText == listTitle[2]) {

      btnNavs[2].style.borderLeft = 'solid #1C98ED'
      formCadastro.style.display = 'none'
      formEndereco.style.display = 'flex'
      formAutentica.style.display = 'none'
      myStore.style.display = 'none'

    } else if (title.innerText == listTitle[3]) {

      btnNavs[3].style.borderLeft = 'solid #1C98ED'
      formCadastro.style.display = 'none'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'flex'
      myStore.style.display = 'none'
      

    } else if (title.innerText == listTitle[4]) {

      btnNavs[4].style.borderLeft = 'solid #1C98ED'
      formCadastro.style.display = 'none'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'none'
      myStore.style.display = 'flex'

    }

  })
})





const inputCep = document.getElementById("cep");
const inputStreet = document.getElementById("street");
const inputNeighborhood = document.getElementById("neighborhood");
const inputCity = document.getElementById("city");
const inputState = document.getElementById("state");

inputCep.addEventListener("blur", (event) => {
  const cep = event.target.value;

  fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then((response) => response.json())
    .then((data) => {
      inputStreet.value = data.street;
      inputNeighborhood.value = data.neighborhood;
      inputCity.value = data.city;
      inputState.value = data.state;
      console.log("Recebi os dados de CEP");
    });


});