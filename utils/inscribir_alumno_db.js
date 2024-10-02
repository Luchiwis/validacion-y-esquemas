const fs = require("node:fs/promises")
const PATH = "./db/alumnos.json"


function inscribir(alumno) {
    fs.readFile(PATH, "utf-8").then(text => {
        console.log(text)
        const lista = JSON.parse(text)
        lista.push(alumno)
        fs.writeFile(PATH, JSON.stringify(lista))
    })
}

module.exports = {
    inscribir
}