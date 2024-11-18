function setup() {
    createCanvas(512,512);
    background(255);
}
var x0=-1;
var y0=-1;
var x1=-1;
var y1=-1;
function mousePressed() {
    x0=mouseX;
    y0=mouseY;
}

function mouseDragged() {
    x1=mouseX;
    y1=mouseY;
    background(255);
    noStroke();
    fill('red');
    ellipse(x0-3,y0-3,6);
    fill('green');
    ellipse(x1-3,y1-3,6);
}
function mouseReleased() {
    background(255);
    loadPixels();
    bresenham_line(x0, y0, x1, y1);
    updatePixels();
}

function set_pixel(x,y,c) {
    idx = (y * 512 + x) * 4;
    pixels[idx] = c < 0 ? -c : 0;
    pixels[idx + 1] = c > 0 ? c : 0;
    pixels[idx + 2] = 0;
    pixels[idx + 3] = 255;
}


function bresenham_line(x0, y0, x1, y1) {
    let dx = x1 - x0;
    let dy = y1 - y0;
    let Dp = 2 * dy - dx;
    let Deq = 2 * dy;
    let Dinc = 2 * dy - 2 * dx;
    let x, y;
    y = y0;
    for (x = x0; x <= x1; x++) {
        set_pixel(x, y, 0);
        if (Dp < 0) {
            Dp += Deq;
        } else {
            Dp += Dinc;
            y++;
        }
    }
}




