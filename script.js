function record(){
    var recognition = new webkitSpeechRecognition;
    recognition.lang = "ar-SA";
    recognition.onresult = function(event){
        document.getElementById('rec_text').value = event.results[0][0].transcript;
    }
    recognition.start();
}