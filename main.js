//https://teachablemachine.withgoogle.com/models/w9mzX6BMq/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w9mzX6BMq/model.json', modelReady);
}

function modelReady()
{
classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accurarcy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";

        img = document.getElementById('animal_image');
        if (results[0].label == 'Barking'){
            img.src='bark.gif';
        }
        else if (results[0].label == 'Meowing'){
        img.src='meow.gif';
        }
        else if (results[0].label == 'Roar'){
        img.src='Lion.gif'
        }
        else if (results[0].label == 'mooing'){
        img.src='Cow.gif';
    }
    else
    img.src='listen.gif'
}
}