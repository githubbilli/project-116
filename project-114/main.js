function preload() {
    moustache = loadImage('m.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,300,300);
    image(moustache,nose_x,nose_y,20,20);
}

function take_snapshot() {
    save('photo.png');
}

function modelLoaded() {
    console.log("poseNet is somehow initialized");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        nose_x =  results[0].pose.nose.x;
        nose_y =  results[0].pose.nose.y;
        console.log("the awesome x of nose is" + results[0].pose.nose.x);
        console.log("the awesome y of nose is" + results[0].pose.nose.y);
    }else{
        console.log("error");
    }
}

nose_x = 0;
nose_y = 0;