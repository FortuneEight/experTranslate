let rotation = 0;
let scaling = 1;

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    // frameRate(100);
}

function draw() {
    scaling = 1;
    push();
    translate(75, 75);
    background(220);
    scale(scaling);

    for (let i = 0; i < 10; i++) {
        rotate(rotation);
        square(0, 0, 50);
        rotation += 0.005;
        scaling += .02;
        scale(scaling);
    }

    pop();
    translate(425, 425);

    for (let i = 0; i < 2; i++) {
        rotate(rotation);
        square(0, 0, 50);
        rotation += 0.0005;
    }

}