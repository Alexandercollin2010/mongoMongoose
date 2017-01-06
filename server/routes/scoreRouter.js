var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Score =  require('../models/assignments.js' );
var path = require('path');

router.get('/:id?', function(req, res){
  console.log('looking for id' + req.params.id);
  if (req.params.id){
    console.log('looking for id' + req.params);
    Score.find({ _id : req.params.id }, function(err, userResults) {
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log('users: ' + userResults);
          res.send(userResults);
        }
    });
  }else{
    Score.find({}, function(err, userResults) {
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log('users: ' + userResults);
          res.send(userResults);
        }
    });
  }
});

router.post('/', function(req, res){
  console.log('this is what req.body is: ' + req.body);
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
