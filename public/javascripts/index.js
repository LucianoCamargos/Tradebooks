const btn = document.getElementById('btnBusca')
const cart = document.querySelector('.logo-cart')
const contianerCart = document.querySelector('.container-cart')
const backCart = document.getElementById('back-cart')
const containerRegistre = document.querySelector('.container-registration')
const bntClose = document.getElementById('close')
const btnMyUser = document.getElementById('myUser')
const containerLogout = document.querySelector('.containerLogout')

btn.addEventListener("click", e => {

  alert("Botão funcionando")

}
)



cart.addEventListener('click', e => {

  contianerCart.style.display = 'block'

})


backCart.addEventListener('click', (e) => {

  contianerCart.style.display = 'none'
  //contianerCart.className = 'container-cart-close'
})

//Formatar campo de preço
const preco = document.querySelectorAll('.preco-prod')

preco.forEach(element => {
      let valor = parseFloat(element.innerText)

      
      //fução para formata numero com R$
      let valorFormatado = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    element.innerText = valorFormatado
});

btnMyUser.addEventListener('click', ()=>{
 
    if(containerLogout.style.display == 'none'){

      containerLogout.style.display = 'flex'

    }else{
      containerLogout.style.display = 'none'
    }
})  

document.addEventListener('mouseup' ,()=>{
  containerLogout.style.display = 'none'
})


