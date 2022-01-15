function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json' , modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error , result){
    if (error){
        console.error(error);
    }
    else {
        console.log(result);
        random_number_r = Math.floor(Math.random * 255) + 1;
        random_number_g = Math.floor(Math.random * 255) + 1;
        random_number_b = Math.floor(Math.random * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - ";
        result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - ";
        (result[0].confidence*100).toFixed[2]+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";

        img = document.getElementById("alien1");
        img1 = document.getElementById("alien2");
        img2 = document.getElementById("alien3");
        img3 = document.getElementById("alien4");

        if (result[0].label == "Clap"){
            img.src = "alien-01.gif";
            img1.src = "alien-02.png";
            img2.src = "alien-03.png";
            img3.src = "alien-04.png";
        }
        else if (result[0].label == "bell"){
            img1.src = "alien-02.gif";
            img.src = "alien-01.png";
            img2.src = "alien-03.png";
            img3.src = "alien-04.png";
        }
        else if (result[0].label == "snapping"){
            img2.src = "alien-03.png";
            img.src = "alien-01.png";
            img1.src = "alien-02.png";
            img3.src = "alien-04.png";
        }
        else{
            img3.src = "alien-04.png";
            img.src = "alien-01.png";
            img1.src = "alien-02.png";
            img2.src = "alien-03.png";
        }
    }
}