const { response } = require('express');

const Get = ( req, res = response ) => {

    const { id } = req.query;
    res.json({
        ok: true,
        msg: 'Get API',
        id
    })
}

const Post = ( req, res = response ) => {
    const { name } = req.body;
    res.json({
        ok: true,
        msg: 'Post API',
        name
    })
}

const Put = ( req, res = response ) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'Put API',
        id
    })
}
const Patch = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Patch API'
    })
}

const Delete = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Delete API'
    })
}


module.exports = {
    Get,
    Post,
    Put,
    Patch,
    Delete
}