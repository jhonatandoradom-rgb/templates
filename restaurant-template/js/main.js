document.getElementById("businessName").innerText = CONFIG.businessName
document.getElementById("title").innerText = CONFIG.businessName

document.getElementById("address").innerText = CONFIG.address
document.getElementById("hours").innerText = CONFIG.hours

document.getElementById("footerName").innerText = CONFIG.businessName
document.getElementById("footerPhone").innerText = CONFIG.phoneText
document.getElementById("instagramLink").href = CONFIG.instagram
document.getElementById("facebookLink").href = CONFIG.facebook

const whatsapp = `https://wa.me/${CONFIG.phone}`

document.getElementById("whatsappNav").href = whatsapp
document.getElementById("whatsappHero").href = whatsapp
document.getElementById("whatsappFinal").href = whatsapp
document.getElementById("whatsappFloat").href = whatsapp

document.getElementById("section_footer").style.backgroundColor = CONFIG.color
document.getElementById("section_footer").style.color = CONFIG.contrast

document.getElementById("whatsappFinal").style.backgroundColor = CONFIG.contrast
document.getElementById("whatsappFinal").style.color = CONFIG.color

document.getElementById("whatsappNav").style.backgroundColor = CONFIG.color
document.getElementById("whatsappNav").style.color = CONFIG.contrast

document.getElementById("whatsappHero").style.backgroundColor = CONFIG.color
document.getElementById("whatsappHero").style.color = CONFIG.contrast

for (const element in CONFIG.menu) {
    let el = null

    if (element == 0)
        el = document.getElementById("content")
    else
        el = document.getElementById("content" + (parseInt(element) - 1))

  

    el.querySelector("#name").innerText = CONFIG.menu[element].name
    el.querySelector("#price").innerText = CONFIG.menu[element].price
    el.querySelector("#description").innerText = CONFIG.menu[element].description
    el.querySelector("#image").src = CONFIG.menu[element].image
    if (element != CONFIG.menu.length - 1) {
        const clone = el.cloneNode(true)
        clone.id = "content" + element
        el.parentNode.insertBefore(clone, el.nextSibling)
    }


}




