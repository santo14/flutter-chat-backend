/*
    path: api/login
*/

const {Router} = require('express');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


router.post('/new', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],crearUsuario);

router.post('/', [
    check('email','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
], login);

router.get('/renew', validarJWT, renewToken);

module.exports = router;