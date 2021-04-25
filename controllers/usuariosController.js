const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = "No Name", apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};
const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.status(400).json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {
    // const body = req.body;
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        // body
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controladior'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}