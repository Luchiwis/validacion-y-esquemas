const process = require("node:process")
const { validarAlumno } = require("./schemas/alumno.js")
const { inscribir } = require("./utils/inscribir_alumno_db.js")

const PORT = process.env.PORT || 8000

const express = require("express")


const app = express()
app.disable("x-powered-by")

// middleware
app.use(express.json())


// solicitudes
app.get("*", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end("hola amigos")
})

app.post("/inscripcion", (req, res) => {
    const result = validarAlumno(req.body)

    if (result.error) {
        return res.status(400).json({ "error": result.error.message })
    } else {
        inscribir(req.body)
        console.log(req.body)
        res.status(200)
        res.end()
    }

})

app.listen(PORT, () => {
    console.log("el servidor ya está escuchando en http://localhost:" + PORT)
})