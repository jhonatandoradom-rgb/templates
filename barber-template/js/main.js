document.getElementById("nameTitle").innerText = CONFIG.businessName2
document.getElementById("nameFront").innerText = CONFIG.businessName

document.getElementById("address").innerText = CONFIG.address
document.getElementById("hours").innerText = CONFIG.hours

document.getElementById("footerName").innerText = "© "+new Date().getFullYear()+" "+CONFIG.businessName2
document.getElementById("footerPhone").innerText = CONFIG.phoneText
document.getElementById("instagramLink").href = CONFIG.instagram
document.getElementById("facebookLink").href = CONFIG.facebook

const whatsapp = `https://wa.me/${CONFIG.phone}`

//document.getElementById("whatsappNav").href = whatsapp
//document.getElementById("whatsappHero").href = whatsapp
//document.getElementById("whatsappFinal").href = whatsapp
//document.getElementById("whatsappFloat").href = whatsapp

document.getElementById("btnR").style.backgroundColor = CONFIG.color
document.getElementById("btnR").style.color = CONFIG.contrast
document.getElementById("btnR").href = whatsapp


document.getElementById("btnC").style.backgroundColor = CONFIG.color
document.getElementById("btnC").style.color = CONFIG.contrast
document.getElementById("btnC").href = whatsapp







for (const element in CONFIG.services) {
    let el = null

    if (element == 0)
        el = document.getElementById("content")
    else
        el = document.getElementById("content" + (parseInt(element) - 1))

   

    el.querySelector("#name").innerText = CONFIG.services[element].name
    
    el.querySelector("#description").innerText = CONFIG.services[element].description
    
    if (element != CONFIG.services.length - 1) {
        const clone = el.cloneNode(true)
        clone.id = "content" + element
        el.parentNode.insertBefore(clone, el.nextSibling)
    }


}