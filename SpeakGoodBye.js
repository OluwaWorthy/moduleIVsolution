(function () { 

var speakWord = "Good Bye";
var byeSpeaker = {};

byeSpeaker.Speak = function (name) {
  console.log(speakWord + " " + name);

}

window.byeSpeaker = byeSpeaker;

}) ();

