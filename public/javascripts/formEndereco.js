const editarEndereco = document.querySelectorAll('#editar')
const formEnde = document.getElementById('formEnde')
const containerEnderecos = document.querySelector('.div-meus-enderecos')
const cancelarEndereco = document.getElementById('cancelarEndereco')
const abrirFormEndereco = document.getElementById('abrirFormEndereco')
const formSalva = document.getElementById('formSalva')
const formEdita = document.getElementById('formEdita')

const spanEndereco = document.querySelectorAll('.spanEndereco')






const inputCep2 = document.getElementById('cep2')
const inputRua = document.getElementById('street2')
const inputNumero = document.getElementById('number2')
const inputBairro = document.getElementById('neighborhood2')
const inputCidade = document.getElementById('city2')
const inputEstado = document.getElementById('state2')

//Oranizer e limpar todo o codigo e colcoar o complemento que está faltando

let listaEndereco = []
editarEndereco.forEach(e=>{


    e.addEventListener('click', ()=>{
        spanEndereco.forEach(spanID=>{
            if(e.className == spanID.id){
                const spanE = document.querySelectorAll(`#spanE${spanID.id}` )
                spanE.forEach(valores =>{
                    console.log(valores.innerText)
                    listaEndereco.push(valores.innerText)
                })
                console.log(listaEndereco)
                formEnde.style.display = "flex"
                formSalva.style.display = "none"
                formEdita.style.display = "flex"
                containerEnderecos.style.display = "none"
                abrirFormEndereco.style.display = "none"
                
           
        
                inputRua.value = listaEndereco[0]
                inputNumero.value = listaEndereco[1]
                inputBairro.value = listaEndereco[2]
                inputCidade.value = listaEndereco[3]
                inputEstado.value = listaEndereco[4]
                inputCep2.value =listaEndereco[5]
            
                formEdita.action = `/userProfile/editarAddress/${spanID.id}?_method=PUT`
         
            }
        })
    
        
    
    })
})
cancelarEndereco.addEventListener('click', ()=>{
   
    formEnde.style.display = "none"
    containerEnderecos.style.display = "flex"
    abrirFormEndereco.style.display = "block"
    listaEndereco = []
})

abrirFormEndereco.addEventListener('click', ()=>{
    formEnde.style.display = "flex"
    formSalva.style.display = "flex"
    formEdita.style.display = "none"
    containerEnderecos.style.display = "none"
    abrirFormEndereco.style.display = "none"
})