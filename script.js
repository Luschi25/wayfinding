window.onload = function() {

    const textElement = document.getElementById("speechText");

    if(textElement){

        const text = textElement.innerText;

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "de-DE";
        speech.rate = 1.0;
        speech.pitch = 1.0;

        speechSynthesis.speak(speech);
    }
};