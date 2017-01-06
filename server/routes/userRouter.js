var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Score =  require('../models/score.js' );
var path = require('path');

router.get('/', function(req, res){
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

router.post('/', function(req, res){
    console.log('posting data to DB!!!');
    var newScore = new Score({
      assignmentName: req.body.assignmentName,
      studentName: req.body.studentName,
      score: req.body.score,
      dateTurnedIn: req.body.dateTurnedIn
    });
    newScore.save(function(err){
      if (err) {
      console.log("erorr: " + err);
    }else {
      console.log("New score posted.");
      res.sendStatus(201);
    }
    });
});


module.exports= router ;
