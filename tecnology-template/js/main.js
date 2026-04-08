document.getElementById("nameTitle").innerText = CONFIG.businessName2
document.getElementById("nameFront").innerText = CONFIG.businessName
document.getElementById("footerPhone").innerText = CONFIG.phoneText
document.getElementById("address").innerText = CONFIG.address

const container = document.getElementById("productList")

CONFIG.products.forEach(product => {

    const message = `Hola, estoy interesado en ${product.name}`
    const whatsappLink = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`


const card = `
<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="price colorInv">${product.price}</p>

<a target="_blank" class="btn colorComp" href="${whatsappLink}" class="btn">Comprar</a>

</div>
`

container.innerHTML += card

})