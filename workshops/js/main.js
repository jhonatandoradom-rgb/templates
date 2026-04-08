document.getElementById("businessName").innerText = CONFIG.businessName
document.getElementById("title").innerText = CONFIG.businessName

document.getElementById("address").innerText = CONFIG.address
document.getElementById("phone").innerText = CONFIG.phone
document.getElementById("footerName").innerText = CONFIG.businessName

const link = `https://wa.me/${CONFIG.phone}`

document.getElementById("whatsappNav").href = link
document.getElementById("whatsappHero").href = link
document.getElementById("whatsappFinal").href = link