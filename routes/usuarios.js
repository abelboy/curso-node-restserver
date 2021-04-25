const { Router } = require('express');

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
} = require('../controllers/usuariosController');

const router = Router();
router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);

// // router.put('/', (req, res) => {
// //     res.status(400).json({
// //         msg: 'put API'
// //     })
// // })

// // router.delete('/', (req, res) => {
// //     res.json({
// //         msg: 'delete API'
// //     })

// // router.patch('/', (req, res) => {
// // res.json({
// //     msg: 'patch API'
// // })
// // })
// })

module.exports = router;