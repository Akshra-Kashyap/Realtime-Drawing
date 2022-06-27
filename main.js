nose_x=0;
nose_y=0;
left_wrist_x=0,
right_wrist_x=0;
difference=0;


function setup(){

    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,500);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialiazed');
}

function gotPoses(result){

    if(result.length > 0){

        console.log(result);
        nose_x= result[0].pose.nose.x;
        nose_y= result[0].pose.nose.y;
        left_wrist_x= result[0].pose.leftWrist.x;
        right_wrist_x= result[0].pose.rightWrist.x;
        difference= Math.floor(left_wrist_x- right_wrist_x);
        console.log("nose_x = " + nose_x + "nose_y = "+ nose_y );
        console.log("left_wrist_x = "+ left_wrist_x + "right_wrist_x = "+ right_wrist_x + "difference = " + difference);

        

    }

}

function draw(){

    background("#BCECE0");

    document.getElementById("square_side").innerHTML= "The width of the square = " + difference + " px";
    fill("cyan");
    stroke("black");
    square(nose_x, nose_y, difference);
}