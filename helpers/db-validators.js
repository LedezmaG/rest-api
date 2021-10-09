const Rol = require('../model/Rol')
const User = require('../model/User')


const isRolValid = async ( rol = '' ) => {
    const isRol = await Rol.findOne({ rol });
    if ( !isRol ) {
        throw new Error(`Rol invalid`);
    }
}

const isEmailValid = async ( email = '' ) => {
    const isEmail = await User.findOne({ email });
    if ( isEmail ) {
        throw new Error(`Email already registered`);
    }
}

const isIdValid = async ( id ) => {
    const isId = await User.findById(id);
    if ( !isId ) {
        throw new Error(`ID not found`);
    }
}

module.exports = {
    isRolValid,
    isEmailValid,
    isIdValid
}