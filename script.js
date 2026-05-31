window.onload = function() {

    const textElement = document.getElementById("speechText");

    if(textElement){

        const text = textElement.innerText;

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "de-DE";
        speech.rate = 1.0;
        speech.pitch = 1.0;
        

        console.log(speech.voice);
        speechSynthesis.speak(speech);
    }
}; 

// function speakText() {

//     const textElement = document.getElementById("speechText");

//     if(textElement){

//         const text = textElement.innerText;

//         const speech = new SpeechSynthesisUtterance(text);

//         speech.lang = "de-DE";
//         speech.rate = 1.0;
//         speech.pitch = 1.0;

//         speechSynthesis.speak(speech);
//     }
// }

function speakText() {

    const text =
        document.getElementById("speechText").innerText;

    const speech =
        new SpeechSynthesisUtterance(text);

    const voices =
        speechSynthesis.getVoices();

    speech.voice =
        voices.find(v =>
            v.name.includes("Katja Online"));

    speech.lang = "de-DE";
    speech.rate = 0.9;
    speech.pitch = 1.0;

    speechSynthesis.speak(speech);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
// function speakText() {

//     const text =
//         document.getElementById("speechText").innerText;

//     const speech =
//         new SpeechSynthesisUtterance(text);

//     const voices =
//         speechSynthesis.getVoices();

//     speech.voice =
//         voices.find(v =>
//             v.name.includes("Katja Online"))
//         ||
//         voices.find(v =>
//             v.name.includes("Katja"))
//         ||
//         voices.find(v =>
//             v.lang === "de-DE");

//     speech.lang = "de-DE";
//     speech.rate = 0.9;
//     speech.pitch = 1.0;

//     speechSynthesis.speak(speech);
// }

// // window.onload = function() {
// //     speakText();
// // };

// window.onload = function() {

//     setTimeout(() => {
//         speakText();
//     }, 500);

//};