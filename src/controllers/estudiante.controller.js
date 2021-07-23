const Estudiante = require('../models/estudiante.model')

exports.getAllEst = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find()

        return res.status(200).json({data: estudiantes})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.getEstById = async (req, res) => {

    const { id } = req.params

    try {
        const estudiante = await Estudiante.findById(id)

        return res.status(200).json({data: estudiante})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.createEst = async (req, res) => {
    try {
        const estudiante = new Estudiante(req.body)
        await estudiante.save()

        return res.status(201).json({data: estudiante})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.updateEst = async (req, res) => {

    const { id } = req.params

    try {
        const estudiante = await Estudiante.findByIdAndUpdate(id, req.body, { new: true })

        return res.status(200).json({data: estudiante})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.deleteEst = async (req, res) => {

    const { id } = req.params

    try {
        const estudiante = await Estudiante.findByIdAndDelete(id)

        return res.status(200).json({data: estudiante})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}