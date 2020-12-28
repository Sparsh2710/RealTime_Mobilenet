function setup() {
  canvas = createCanvas(220, 220);
  canvas.position(570, 205);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobile Net', modelLoaded);
}

function modelLoaded() {
  console.log("Model loaded !");
}

function draw() {
  image(video, 0, 0, 220, 220);
  classifier.classify(video, gotResult)
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].toFixed(3);
  }
}

