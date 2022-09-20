Webcam.set({
    width :350,
    height : 300,
    image_format :'png', 
    png_quality : 100
});

Webcam.attach('#cam');

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/89sIFzPtO/model.json',modelLoaded);

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById('photo').innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);

function identify(){
}

function modelLoaded(){
    console.log("Model Loaded");
}

function identify(){
    img = document.getElementById('captured_image');
    classifier.classify(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('result_object_name').innerHTML = results[0].label ;
        document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(2);
    }
}

// ' https://teachablemachine.withgoogle.com/models/89sIFzPtO/ '