const z = require("zod")

const alumnoSchema = z.object(
    {
        nombre: z.string({
            invalid_type_error: "el nombre debe ser un string",
            required_error: "el nombre no puede ser vacio"
        }),
        apellido: z.string({
            invalid_type_error: "el apellido debe ser un string",
            required_error: "el apellido no puede ser vacio"
        }),
        dni: z.number(),
        stage: z.number(),
        genero: z.enum(["m", "f"], {
            invalid_type_error: "los generos disponibles son 'm' o 'f'",
            required_error: "hay que poner un genero"
        })
    }
)

function validarAlumno(alumno) {
    return alumnoSchema.safeParse(alumno)
}

module.exports = {
    validarAlumno
}

