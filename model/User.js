const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'name required'],
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password required'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['admin', 'user']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
})

UserSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    return user;
}


module.exports = model( 'User', UserSchema );