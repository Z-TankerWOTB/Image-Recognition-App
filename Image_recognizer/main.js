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
// ' https://teachablemachine.withgoogle.com/models/89sIFzPtO/ '