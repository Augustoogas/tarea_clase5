const express = require('express')
const docentesController = require('../controllers/docentes.controllers')

const router = express.Router()

router.get('/', docentesController.getAllDocentes)
router.get('/:legajo', docentesController.getDocentesByDni)
router.delete('/:legajo', docentesController.deleteDocentesByDni)
router.post('/', docentesController.crateDocentes)
router.put('/:legajo', docentesController.updateDocentes )

module.exports = { router}