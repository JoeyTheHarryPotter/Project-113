function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(640, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    stroke(101,67,33);
    fill(101,67,33);
    rect(75, 37, 500, 25);

    stroke(101,67,33);
    fill(101,67,33);
    rect(578, 50, 25, 350);

    stroke(101,67,33);
    fill(101,67,33);
    rect(75, 397, 500, 25);

    stroke(101,67,33);
    fill(101,67,33);
    rect(47, 50, 25, 350);

    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(60, 50, 50);

    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(590, 50, 50);

    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(590, 410, 50);

    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(60, 410, 50);

    image(video, 165, 120, 320, 220);
}

function take_snapshot(){
    save('User Image.png');
}