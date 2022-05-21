const {Router} = require('express');
const {check} = require('express-validator');

// controllers
const { addUser,
        getUsers,
        getUser,
        putUser,
        deleteUser } = require('../controllers/usuarios');

// helpers
const { verficarEmail, verificarId } = require('../helpers/db-validators');

// middlewares
const {validarCampos} = require('../middlewares');

const router = Router();

router.post('/', [
    check('email', 'Email is required').isEmail(),
    check('email').custom(verficarEmail),
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'password is required').isLength({min: 6}),
    check('rol', 'rol is required').not().isEmpty(),
    validarCampos
], addUser)

router.get('/', getUsers)

router.get('/:id', [
    check('id', 'Id is not valid').isNumeric(),
    check('id').custom(verificarId),
    validarCampos
],getUser)

router.put('/:id', [
    check('id', 'id is not valid').isNumeric(),
    check('id').custom(verificarId),
    validarCampos
], putUser)

router.delete('/:id', [
    check('id', 'Id is not valid').isNumeric(),
    check('id').custom(verificarId),
    validarCampos
], deleteUser)

module.exports = router;