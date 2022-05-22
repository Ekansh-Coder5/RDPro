function setup() {
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,450);
    canvas.position(560,150)
    console.log("Starting")

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)        
} 
function draw() {
    background('cyan')
}

function modelLoaded() {
    console.log("Almost loaded")
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log("Started");
        console.log(results)
    }
}