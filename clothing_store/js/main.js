document.getElementById("nameTitle").innerText = CONFIG.businessName2
document.getElementById("nameFront").innerText = CONFIG.businessName
document.getElementById("footerPhone").innerText = CONFIG.phoneText
document.getElementById("address").innerText = CONFIG.address
document.getElementById("hours").innerText = CONFIG.hours
document.getElementById("instagramLink").href = CONFIG.instagram
document.getElementById("facebookLink").href = CONFIG.facebook
document.getElementById("footerName").innerText = CONFIG.businessName

const container = document.getElementById("products")

function render(list){

container.innerHTML = ""

list.forEach(product => {

const message = `Hola, quiero este producto: ${product.name}`
const link = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

container.innerHTML += `
<div class="group">

<div class="overflow-hidden rounded-xl">
<img src="${product.image}" class="w-full h-80 object-cover group-hover:scale-110 transition">
</div>

<h3 class="mt-3 font-semibold">${product.name}</h3>

<p class="text-gray-500">${product.price}</p>

<a href="${link}" target="_blank"
class="mt-2 inline-block text-sm underline">
Comprar por WhatsApp
</a>

</div>
`
})

}

function filterCategory(cat){

if(cat === "all"){
render(CONFIG.PRODUCTS)
}else{
render(CONFIG.PRODUCTS.filter(p => p.category === cat))
}

}

render(CONFIG.PRODUCTS)