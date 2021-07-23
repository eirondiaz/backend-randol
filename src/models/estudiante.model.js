const { Schema, model } = require('mongoose')

const estudianteSchema = Schema({
    matricula: {
        type: String,
        required: [true, 'matricula requerido'],
        trim: true
    },
    nombre: {
        type: String,
        required: [true, 'nombre requerido'],
        trim: true
    },
    edad: {
        type: Number,
        required: [true, 'edad requerido'],
        trim: true
    },
    sexo: {
        type: String,
        required: [true, 'sexo requerido'],
        trim: true
    },
    cuatrimestre: {
        type: Number,
        required: [true, 'cuatrimestre requerido'],
        trim: true
    },
}, { versionKey: false })

module.exports = model('Estudiante', estudianteSchema)