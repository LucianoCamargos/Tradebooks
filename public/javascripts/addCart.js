const btnAddCart = document.querySelectorAll('#btn-add-cart')
const carItens = document.querySelector('.cart-itens')
const containerCart = document.querySelector('.container-cart-books')
const cardProduct = document.querySelectorAll('.card-product')





if (carItens.innerText == '') {
    carItens.style.color = '#23232E'
    carItens.style.background = '#23232E'
}


let listCart = []

//if verifica se existe alguma coisa dentro do localStorage listCar,
//se estiver vazio listCart recebe [vazio]
//senão recebe todos os itens o storage e manten os arquivos salvos no carrinho
if (!localStorage.getItem('listCart')) {
    listCart = []
} else {

    console.log()
    JSON.parse(localStorage.getItem('listCart')).forEach(e => {
        listCart.push(e)
    })
}



btnAddCart.forEach(btn => {

    btn.addEventListener('click', e => {



        cardProduct.forEach(card => {
            if (btn.value == card.id) {



                console.log(listCart)
                listCart.push({"id": btn.value, "img": card.children[0].src, "title": card.children[1].innerText, "qtde": 1, "preco": card.children[2].innerText, "total": card.children[2].innerText })

                addStorage(listCart)



                console.log(listCart)
                

                let localCard = JSON.parse(localStorage.getItem(`listCart`))

                let i = localCard.length - 1
                if (localCard.length == 0) {
                    i = 0
                }
                if(i<3){

                 
                    let div = document.createElement('div')
                    div.innerHTML = `
                  
                    <div class="books-cart">
                    <img src="${localCard[i].img}" alt="">
                    <div class="container-titles">
                       <strong class="title-cart"> ${localCard[i].title}</strong>
                       <div class="container-strong">
                       <span class="span-qtde-cart">
                            <button id="${i}"  class="btn-cart-min">-</button>
                            <input type="text" id="${i}" value="${localCard[i].qtde}" class="input-qtde-cart">
                            <button id="${i}"  class="btn-cart-max">+</button>
                        </span>
                        <strong >
                        <strong >Valor:</strong>
                          <strong class="strong-cart-price">${localCard[i].preco}</strong>
                          </strong>
                       </div>
                    </div>
                 </div>
               
                    `
    
                    containerCart.appendChild(div)
    
    
                    i++
                }
                carItens.innerText = localCard.length
            }
        })
        somaQtdeCart()
        subQtdeCart()
        carItens.style.color = '#ffffff'
        carItens.style.background = '#1C98ED'
    })
})



window.addEventListener('load', () => {



    let localCard = JSON.parse(localStorage.getItem(`listCart`))


    for (let j = 0; j <= 2; j++) {

        if(!localCard[j]){
             continue
        }

        let div = document.createElement('div')
        div.innerHTML = `
              
                <div class="books-cart">
                <img src="${localCard[j].img}" alt="">
                <div class="container-titles">
                   <strong class="title-cart"> ${localCard[j].title}</strong>
                   <div class="container-strong">
                   <span class="span-qtde-cart">
                        <button id="${j}" class="btn-cart-min">-</button>
                        <input type="text" id="${j}" value="${localCard[j].qtde}" class="input-qtde-cart">
                        <button id="${j}" class="btn-cart-max">+</button>
                    </span>
                    <strong >
                    <strong >Valor:</strong>
                    <strong class="strong-cart-price">${localCard[j].total}</strong>
                    </strong>
                    </div>
                </div>
             </div>
           
                `

        containerCart.appendChild(div)
        

    }

    somaQtdeCart()
    subQtdeCart()



    carItens.style.color = '#ffffff'
    carItens.style.background = '#1C98ED'
    carItens.innerText = localCard.length


})

//função vai somar a quantidade de itens de um item adicionado no carrinho
//vai mudar o valor do preço conforme aumentar a quantidade
//e aumentar o numero do input
function somaQtdeCart() {
    let localCard = JSON.parse(localStorage.getItem(`listCart`))
    const btnMax = document.querySelectorAll('.btn-cart-max')
    const inputQtdeCart = document.querySelectorAll('.input-qtde-cart')
    const precoCart = document.querySelectorAll('.strong-cart-price')


    btnMax.forEach(btnM => {
        btnM.addEventListener('click', () => {

            inputQtdeCart[btnM.id].value = parseInt(inputQtdeCart[btnM.id].value) + 1

            let valor = parseFloat(localCard[btnM.id].preco.replace(/[^0-9,]*/g, '').replace(',', '.')) * parseFloat(inputQtdeCart[btnM.id].value)

            precoCart[btnM.id].innerText = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            listCart[btnM.id].total = precoCart[btnM.id].innerText
            listCart[btnM.id].qtde = inputQtdeCart[btnM.id].value
            console.log(listCart)
            addStorage(listCart)
        })
    })
}
function subQtdeCart() {
    let localCard = JSON.parse(localStorage.getItem(`listCart`))
    const btnMin = document.querySelectorAll('.btn-cart-min')
    const inputQtdeCart = document.querySelectorAll('.input-qtde-cart')
    const precoCart = document.querySelectorAll('.strong-cart-price')
    const booksCart = document.querySelectorAll('.books-cart')

    btnMin.forEach(btnM => {
        btnM.addEventListener('click', () => {

            inputQtdeCart[btnM.id].value = parseInt(inputQtdeCart[btnM.id].value) - 1
            if(inputQtdeCart[btnM.id].value < 1){
                inputQtdeCart[btnM.id].value =1
            }
            let valor = parseFloat(localCard[btnM.id].preco.replace(/[^0-9,]*/g, '').replace(',', '.')) * parseFloat(inputQtdeCart[btnM.id].value)

            precoCart[btnM.id].innerText = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            listCart[btnM.id].total = precoCart[btnM.id].innerText
            listCart[btnM.id].qtde = inputQtdeCart[btnM.id].value

            addStorage(listCart)

            //resolver isso depois
            if (parseInt(inputQtdeCart[btnM.id].value) <= 0) {
                localStorage.removeItem(listCart[btnM.id])
                console.log(parseInt(inputQtdeCart[btnM.id].value))
                console.log(btnM.id)

            }
        })
    })
}



//função para adicionar valor ao storage
function addStorage(valor) {

    let itens = JSON.stringify(valor)
    localStorage.setItem('listCart', itens)

}