
// ===============================
// 🔹 1. LEER PARÁMETROS DE URL
// ===============================

const params = new URLSearchParams(window.location.search)

const typeFromURL = params.get("type")
const nameFromURL = params.get("name")
const phoneFromURL = params.get("phone")
const addressFromURL = params.get("address")

// ===============================
// 🔹 2. VALIDAR Y SOBRESCRIBIR CONFIG
// ===============================

if (typeFromURL && DATA[typeFromURL]) {
  CONFIG.type = typeFromURL
}

if (nameFromURL) {
  CONFIG.businessName = decodeURIComponent(nameFromURL)
}

if (phoneFromURL) {
  CONFIG.phone = phoneFromURL
}

if (addressFromURL) {
  CONFIG.address = decodeURIComponent(addressFromURL)
}

// ===============================
// 🔹 3. OBTENER DATA DEL NEGOCIO
// ===============================

const info = DATA[CONFIG.type]

if (!info) {
  console.error("Tipo de negocio inválido")
}

// ===============================
// 🔹 4. TEXTOS
// ===============================

document.getElementById("title").innerText = CONFIG.businessName
document.getElementById("businessName").innerText = CONFIG.businessName

document.getElementById("heroTitle").innerText = info.title
document.getElementById("heroSubtitle").innerText = info.subtitle

document.getElementById("address").innerText = CONFIG.address
document.getElementById("phone").innerText = CONFIG.phoneText
document.getElementById("hours").innerText = CONFIG.hours
document.getElementById("footerName").innerText = CONFIG.businessName+" - " + CONFIG.type
if(info.download){
    document.getElementById("downloadButton").href = info.download
}
else{
    document.getElementById("downloadButton").style.display = "none"
}
if(info.titleGallery)
    document.getElementById("galleryTitle").innerText = info.titleGallery
if(info.buttonDownloadLabel)
    document.getElementById("downloadButton").innerText = info.buttonDownloadLabel
// ===============================
// 🔹 5. WHATSAPP
// ===============================

const message = `Hola, quiero información sobre ${CONFIG.businessName}`
const link = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

document.getElementById("whatsappNav").href = link
document.getElementById("whatsappHero").href = link
document.getElementById("whatsappFinal").href = link
document.getElementById("whatsappFloat").href = link

// ===============================
// 🔹 6. SERVICIOS DINÁMICOS
// ===============================

const servicesContainer = document.getElementById("services")

if (servicesContainer && info.services) {

  servicesContainer.innerHTML = ""

  info.services.forEach(service => {

    servicesContainer.innerHTML += `
    <div class="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition text-left">
      <h4 class="font-semibold text-lg mb-2">${service.title}</h4>
      <p class="text-gray-500 text-sm">${service.detail}</p>
    </div>
    `
  })

}

// ===============================
// 🔹 7. GALERÍA + LIGHTBOX
// ===============================

const galleryContainer = document.getElementById("gallery")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")

if (galleryContainer && info.gallery) {

  galleryContainer.innerHTML = ""

  info.gallery.forEach(img => {

    galleryContainer.innerHTML += `
    <div class="overflow-hidden rounded-2xl cursor-pointer">
      <img src="${img}" 
      class="w-full h-52 object-cover hover:scale-110 transition duration-300"
      onclick="openLightbox('${img}')">
    </div>
    `
  })

}

// ===============================
// 🔹 8. LIGHTBOX FUNCIONAL
// ===============================

window.openLightbox = function(src) {
  lightbox.classList.remove("hidden")
  lightbox.classList.add("flex")
  lightboxImg.src = src
}

if (lightbox) {
  lightbox.onclick = function () {
    lightbox.classList.add("hidden")
    lightbox.classList.remove("flex")
  }
}

// ===============================
// 🔹 9. Banner
// ===============================

if(info.banner) {
  document.getElementById("hero").style.backgroundImage = `url('${info.banner}')`
  document.getElementById("hero").style.backgroundSize = "cover"
  document.getElementById("hero").style.backgroundPosition = "center"
  document.getElementById("hero").style.backgroundRepeat = "no-repeat"  
  document.getElementById("heroTitle").style.color = "white"
  document.getElementById("heroSubtitle").style.color = "white"
  document.getElementById("hero").className="h-[70vh] flex items-center  justify-center bg-gray-100 text-center"  
  document.getElementById("heroContent").className="bg-black bg-opacity-50 p-8 rounded-lg"
  document.getElementById("whatsappHero").className=document.getElementById("whatsappHero").className+" border-white border-2"
  // style=" background-size: cover; background-position: center; background-repeat: no-repeat;"
}

// ===============================
// 🔹 10. Redes sociales
// ===============================

document.getElementById("instagramLink").href = CONFIG.instagram
document.getElementById("facebookLink").href = CONFIG.facebook

// ===============================
// 🔹 11. LOG (DEBUG OPCIONAL)
// ===============================

console.log("CONFIG FINAL:", CONFIG)
console.log("DATA USADA:", info)