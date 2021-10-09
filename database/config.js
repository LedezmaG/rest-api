const mongoose = require('mongoose');

const connection = async () => {

    try {
        
        await mongoose.connect( process.env.MONGODB_BD, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log( 'Data base on line' );

    } catch (error) {
        console.log(error);
        throw new Error('Conetion to data base error')
    }

}

module.exports = {
    connection
}