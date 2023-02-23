

const tabelaCart = document.querySelector('.tabela-cart')

const localCart = JSON.parse(localStorage.getItem(`listCart`))
for (let i = 0; i < localCart.length; i++) {

    // let valor = converterNumber(localCart[i].preco) * parseInt(localCart[i].qtde)
    let tr = document.createElement('tr')

    tr.innerHTML = `
    
    <td><img src="${localCart[i].img}">${localCart[i].title}</td>
    <td>Tempo de Entrega</td>
    <td class="preco">${localCart[i].preco}</td>
    <td>   
        <span class="span-qtde-cart">
            <button id="${i}"  class="btn-cart-min">-</button>
            <input type="text" id="${i}" value="${localCart[i].qtde}" class="input-qtde-cart">
            <button id="${i}"  class="btn-cart-max">+</button>
        </span>
    </td>
    <td  class="total">${formatarMoeda(localCart[i].total)}</td>
    <td>Excluir</td>
    
    
    `


    tabelaCart.appendChild(tr)
}

const btnSomar = document.querySelectorAll('.btn-cart-max')
const btnSubtrair = document.querySelectorAll('.btn-cart-min')
const inputQtde = document.querySelectorAll('.input-qtde-cart')
const total = document.querySelectorAll('.total')
const preco = document.querySelectorAll('.preco')




btnSomar.forEach(somar => {
    somar.addEventListener('click', () => {
        inputQtde[somar.id].value++
        let resultado = converterNumber(preco[somar.id].innerText) * parseInt(inputQtde[somar.id].value)
        total[somar.id].innerText = formatarMoeda(resultado)
        localCart[somar.id].total = total[somar.id].innerText
        localCart[somar.id].qtde = inputQtde[somar.id].value

        localStorage.setItem("listCart", JSON.stringify(localCart))

    })
})
btnSubtrair.forEach(subt => {
    subt.addEventListener('click', () => {
        inputQtde[subt.id].value--
        if (inputQtde[subt.id].value < 1) {
            inputQtde[subt.id].value = 1
        }
        let resultado = converterNumber(preco[subt.id].innerText) * parseInt(inputQtde[subt.id].value)
        total[subt.id].innerText = formatarMoeda(resultado)
        localCart[subt.id].total = total[subt.id].innerText
        localCart[subt.id].qtde = inputQtde[subt.id].value

        localStorage.setItem("listCart", JSON.stringify(localCart))
    })
})


function converterNumber(valor) {
    return parseFloat(valor.replace(/[^0-9,]*/g, '').replace(',', '.'))

}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const btnContinueBuy = document.querySelector('.btn-continue-buy')
const sectionTableCart = document.querySelector('.section-table-cart')
const sectionAddressCheck = document.querySelector('.section-address-check')
const btnFinishBuy = document.querySelector('.btn-finish-buy')
const containerEndereco = document.querySelectorAll('.enderecos')
const addressCheck = document.querySelectorAll('.address-check')
const spanBtnTrocarAddress = document.querySelector('.trocar-Address')

btnContinueBuy.addEventListener('click', () => {

    sectionAddressCheck.style.display = "block"
    sectionTableCart.style.display = "none"
    btnContinueBuy.style.display = "none"
    btnFinishBuy.style.display = "block"

})



//QUANDO ESCOLHO UM ENDEREÇO PARA ENTREGA ELE ESCONDE OS OUTROS ENDEREÇOS
// E DEIXA O ENDEREÇO ESCOLHIDO MARCADO
const idAddress = document.querySelector('.idAddress')
containerEndereco.forEach(e => {
    e.addEventListener('click', () => {
        e.style.borderColor = "green"
        e.style.boxShadow = "green 0px 1px 4px 0px"
        for (let i = 0; i < containerEndereco.length; i++) {
            if (containerEndereco[i].style.borderColor != "green") {
                containerEndereco[i].style.display = 'none'
                
            }
            idAddress.value = containerEndereco[i].children[0].id
        }
        spanBtnTrocarAddress.style.display = "block"
    })

})

spanBtnTrocarAddress.addEventListener('click', () => {
    spanBtnTrocarAddress.style.display = "none"
    for (let i = 0; i < containerEndereco.length; i++) {

        containerEndereco[i].style.display = "block"
        containerEndereco[i].style.borderColor = "#1C98ED"
        containerEndereco[i].style.boxShadow = "#1C98ED 0px 1px 4px 0px"
    }
})


const formDados = document.querySelector('.formDados')




for (let i = 0; i < localCart.length; i++) {

    // let valor = converterNumber(localCart[i].preco) * parseInt(localCart[i].qtde)
    let div = document.createElement('div')

    div.innerHTML = `
            <input type="text" name="qtde" value="${localCart[i].qtde}"  style="display:none">
            <input type="text" name="idBook"  value="${localCart[i].id}" style="display:none">
    `

    formDados.appendChild(div)
}


//
const formaPag = document.querySelectorAll('.formaPag')
const formaPagamento = document.querySelector('.formaPagamento')

formaPag.forEach(e => {
    e.addEventListener('click', () => {

        e.children[0].checked = 'true'
        formaPagamento.value = e.children[1].innerText

    })
})


const subTotal = document.querySelector('.subTotal')
const valorPedido = document.querySelector('.valorPedido')
const valorTotal = document.querySelector('.valorTotal')
const valorFrete = document.querySelector('.valorFrete')
const valorTotalSpan = document.querySelector('.valorTotalSpan')
const valorFreteSpan = document.querySelector('.valorFreteSpan')
let valorSubTotal =0
for(let i= 0; i < localCart.length; i++){

  valorSubTotal += converterNumber( localCart[i].total)
     console.log(valorSubTotal)   
}
subTotal.innerText = formatarMoeda(valorSubTotal)
valorFreteSpan.innerText = formatarMoeda(0)
valorTotalSpan.innerText=formatarMoeda(valorSubTotal)
valorFrete.value = 0
valorPedido.value= valorSubTotal
valorTotal.value = valorSubTotal


btnFinishBuy.addEventListener('click', ()=>{
    localStorage.removeItem('listCart')
    window.location.href = "http://localhost:3000/"
    alert('Pedido Concluído com sucesso!')
})