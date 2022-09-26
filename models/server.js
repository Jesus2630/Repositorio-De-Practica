const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Midlewares
        this.routes();
    }

    routes(){
        this.app.get('/', (req,res) =>{
            res.send('Homepage')
        })
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Servidor iniciado en el puerto: ${this.port}`)
        })        
    }
}

module.exports = Server;