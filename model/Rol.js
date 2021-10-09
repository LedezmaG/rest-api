const { Schema, model } = require('mongoose');

const RolSchema = new Schema({
    rol: {
        type: String,
        required: [ true, 'Rol required' ]
    }
})

module.exports = model( 'Rol', RolSchema )