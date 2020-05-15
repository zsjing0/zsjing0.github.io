var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var r=50;

var grammar = '#JSGF V1.0; grammar numbers; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon ';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;


var speechRecognitionList = new SpeechGrammarList();
var recognition = new SpeechRecognition();
recognition.lang = "en-US";

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;


var diagnostic = document.querySelector('.output');

recognition.onresult = function (event) {
    //var result = event.results.toString();
   var index = event.results.length - 1;
   var result = event.results[0][0].transcript;
   console.log(result);
   var c ="color";
   var b = "background";
   var d = "size";
   if(result.includes(c)){  
      var color = result.slice(6);
      console.log(color);
      ctx.arc(400, 300, 50, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
     
    }
    else if(result.includes(b)){
      var bgcolor = result.slice(11);
      console.log(bgcolor);
      ctx.beginPath();
      ctx.fillStyle =bgcolor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fill();
    }
  else if(result.includes(d)){
      var result = result.slice(5);
       var r = parseInt(result);
      if(r>300){
        responsiveVoice.speak("Size too big, the size limit is 300");
      }
      else if(r<1){
        responsiveVoice.speak("Size too small, the minimize size is 1");
      }
      console.log(r);
      ctx.beginPath();
      ctx.arc(400, 300, r, 0, 2 * Math.PI);
      ctx.stroke();  
  }
  else if(result.includes("help")){
    responsiveVoice.speak("Say color, followed by a color, to set the circle color. Say background, followed by a color, to set the background color. Say size, followed of a number from 1 to 300, to set the diameter of the circle. Say about, to hear about the program.");
  }
  else if(result.includes("about")){
    responsiveVoice.speak("Author: Cuishan Chen. This is Voice Recognition Project ");
  }
}

const start = document.getElementById('start');
console.log(start);

start.addEventListener('click', function() {
  recognition.start();
});



const stop = document.getElementById('stop');
console.log(stop);

stop.addEventListener('click', function() {
  recognition.stop();
});
