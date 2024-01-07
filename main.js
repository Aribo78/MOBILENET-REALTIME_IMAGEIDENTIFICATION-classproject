function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  classifier.classify(video, gotResults);
}
function draw() 
{
image(video, 0, 0, 300, 300);
}
function modelLoaded()
{
  console.log('Model Loaded');
}
function gotResults(error, results) 
{
if(error){
  console.log(error)
}
else{
  if ((results[0].confidence > 0.5) && (previous_result != results[0].label)){
    console.log(results) 
    previous_result=results[0].label
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("accuracy_name").innerHTML = results[0].confidence.toFixed(3);

  }
  
}
}


