const projects = [{
    name: "seleccíona algún proyecto en la pestaña de Proyectos para ver contenido aquí.",
    date: "-",
    type: "-",
    images: []
}, {
    name: "Portón",
    date: "2020 - Marzo",
    type: "Soldadura",
    images: [
        [1, "lightImg"],
        [2, "lightImg"],
        [3, "wideImg"]
    ]
}, {
    name: "Puerta de garaje",
    date: "2021 - Julio",
    type: "Soldadura",
    images: [
        [1, "lightImg"],
        [2, "lightImg"],
        [3, "lightImg"],
        [4, "lightImg"],
        [5, "wideImg"]
    ]
}, {
    name: "Puerta",
    date: "2020 - Noviembre",
    type: "Soldadura",
    images: [
        [1, "lightImg"],
        [2, "lightImg"],
        [3, "lightImg"]
    ]
}, {
    name: "Varanda",
    date: "2021 - Octubre",
    type: "Soldadura",
    images: [
        [1, "lightImg"],
        [2, "lightImg"],
        [3, "wideImg"]
    ]
}, {
    name: "Reja",
    date: "2021 - Mayo",
    type: "Soldadura",
    images: [
        [1, "lightImg"],
        [2, "lightImg"],
        [3, "wideImg"]
    ]
}, {
    name: "Bodega de bicicletas",
    date: "2021 - Abril",
    type: "Soldadura - Metalistería",
    images: [
        [1, "lightImg"],
        [2, "lightImg"],
        [3, "lightImg"],
        [4, "lightImg"]
    ]
}, {
    name: "Plataforma base",
    date: "2020 - Noviembre",
    type: "Soldadura",
    images: [
        [1, "lightImg"],
        [2, "lightImg"],
        [3, "lightImg"],
        [4, "lightImg"],
        [5, "wideImg"]
    ]
}, {
    name: "Portón largo",
    date: "2021 - Mayo",
    type: "Soldadura",
    images: [
        [1, "wideImg"],
        [2, "wideImg"],
        [3, "wideImg"]
    ]
}];

function print(e) {
    const t = projects[e];
    document.querySelector("#dateWorkDetail p").innerText = t.date, document.querySelector('title').textContent = t.name, document.querySelector("#workTypeDetail p").innerText = t.type, document.querySelector("#workNameDetail").innerText = t.name, t.images.forEach((t => {
        const a = document.createElement("img");
        a.src = `assets/images/resource/project-${e}.${t[0]}.jpg`, a.classList.add("galleryImg"), a.classList.add(`${t[1]}`), a.alt = "ornamentaciones - fundiciones - metalisteria - Vulcano", a.title = projects[e].name, document.querySelector(".imagesContainer").appendChild(a)
    }))
}(!localStorage.getItem("project") || localStorage.getItem("project") >= projects.length) && localStorage.setItem("project", 0), window.onload = () => {
    print(localStorage.getItem("project"))
};