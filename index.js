'user strict'

var mongoose = require('mongoose');
var port = process.env.PORT || 3700;

var app = require('./app');

mongoose.connect('mongodb://localhost:27017/app_albums',(err,res)=>{
    if(err)
    {
        throw err;
    }
    else{
        console.log('base de datos funcionando correctamente..');

        app.listen(port,() =>{
            console.log('Api RESTful de albums escuchando');        
        });
    }
});