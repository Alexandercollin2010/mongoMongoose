var express = require('express');
var routerOne = express.Router();
var mongoose = require('mongoose');
var Score =  require('../models/assignments.js' );
var path = require('path');


routerOne.get('/', function(req, res){
    console.log('Base URL hit!!');
    Score.find({}, function(err, userResults) {
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log('users: ' + userResults);
          res.sendFile(path.resolve('public/views/index.html'));
        }
    });
});

module.exports= routerOne ;
