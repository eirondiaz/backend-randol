const { Router } = require('express')
const router = Router()
const EstCtrl = require('../controllers/estudiante.controller')

router.get('/', EstCtrl.getAllEst)

router.get('/:id', EstCtrl.getEstById)

router.post('/', EstCtrl.createEst)

router.put('/:id', EstCtrl.updateEst)

router.delete('/:id', EstCtrl.deleteEst)

module.exports = router