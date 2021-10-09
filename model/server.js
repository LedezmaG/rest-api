const express = require('express');
const cors = require('cors')
const { connection } = require('../database/config')

class Server {

    constructor(){
        this.app = express();
        this.port =  process.env.PORT;
        this.middleware();
        this.rotes();
        this.dbConect();
        // this.userPaht = '/api/users';
    }

    async dbConect() {
        await connection()
    }

    middleware() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') )
    }

    rotes() {
        this.app.use( '/api/users', require('../routes/user') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Puerto de servidor: ' + this.port );
        })
    }
}

module.exports = Server;