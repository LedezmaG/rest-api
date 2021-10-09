const { response } = require('express');
const bcripjs = require('bcryptjs');
const User = require('../model/User');

const Get = async ( req, res = response ) => {

    const { id, limit = 5, form = 0 } = req.query;
    
    if ( id ) {
        const users = await User.findById( id, { state: true } )
        res.json({
            ok: true,
            result: users 
        })
    } else {

        const [ total, users ] = await Promise.all([
            User.countDocuments({ state: true }),
            User.find({ state: true })
                .skip( Number( form ) )
                .limit( Number(limit) )
        ])
        
        res.json({
            ok: true,
            result: users,
            meta: {total}
        })
    }
}

const Post = async ( req, res = response ) => {

    const {name,email,password,rol} = req.body;
    const user = new User({ name, email, password, rol });

    // Password
    const salt = bcripjs.genSaltSync();
    user.password = bcripjs.hashSync( password, salt )

    await user.save();

    res.json({
        ok: true,
        user
    })
}

const Put = async ( req, res = response ) => {
    const { id } = req.params;
    const { password, google, email, _id, ...rest } = req.body;

    if ( password ) {
        const salt = bcripjs.genSaltSync();
        rest.password = bcripjs.hashSync( password, salt )
    }

    const user = await User.findByIdAndUpdate( id, rest )

    res.json({
        ok: true,
        result: {...user._doc}
    })
}

const Patch = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Patch API'
    })
}

const Delete = async ( req, res = response ) => {

    const { id } = req.params;

    // const user = await User.findByIdAndDelete( id );
    const user = await User.findByIdAndUpdate( id, { state: false } );

    res.json({
        ok: true,
        result: 'User deleted'
    })
}


module.exports = {
    Get,
    Post,
    Put,
    Patch,
    Delete
}