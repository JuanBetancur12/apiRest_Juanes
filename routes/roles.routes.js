const express = require('express');
const roles = require('../controller/roles_controller');

const router = express.Router();

router.get('/traer_roles',roles.traer)
router.get('/obtener_permisos', roles.obtenerPermisos)
router.get('/obtener_permisos_rol/:rolId', roles.obtenerPermisosPorRol)
router.post('/actualizar_permisos', roles.actualizarPermisos);

module.exports = router;