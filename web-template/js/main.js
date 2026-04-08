document.getElementById("businessName").innerText = CONFIG.businessName;
document.getElementById("address").innerText = CONFIG.address;
document.getElementById("phone").innerText = CONFIG.phone;

const whatsappLink = `https://wa.me/${CONFIG.phone}`;

document.getElementById("whatsappBtnTop").href = whatsappLink;
document.getElementById("whatsappBtnHero").href = whatsappLink;
document.getElementById("whatsappBtnFinal").href = whatsappLink;