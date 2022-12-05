(function () {

var speakWord = "Hello";
var helloSpeaker = {};


helloSpeaker.Speak = function (name) {
  console.log(speakWord + " " + name);

}

window.helloSpeaker = helloSpeaker;

}) ();

