var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var scoreSchema= new Schema({
  assignmentName: String,
  studentName: String,
  score: Number,
  dateTurnedIn: String
});

var score= mongoose.model('score', scoreSchema);

module.exports= score;
