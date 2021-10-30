function Balloon(pic) {
    this.div = document.createElement("div");
    this.left = randomRange(0, 1000);
    this.top = randomRange(0, 600);
    this.div.className = "balloon";
    if (pic == null) {
        this.bg = randomColor();
        this.r = randomRange(30, 95);
        this.speedX = randomRange(-6, 6);
        this.speedY = randomRange(-6, 6);
    }
    else {
        this.bg = pic;
        this.r = randomRange(60, 110);
        this.speedX = randomRange(-4, 4);
        this.speedY = randomRange(-4, 4);
    }
    this.drawBalloon = (parent) => {
        console.log(this);
        var style = this.div.style;
        style.width = this.r * 2 + "px";
        style.height = this.r * 2 + "px";
        style.left = this.left + "px";
        style.top = this.top + "px";
        style.background = this.bg;
        style.backgroundSize = "cover";
        style.backgroundPosition = "center";
        parent.appendChild(this.div);
        this.parent = parent;
    }
}

Balloon.prototype.run = function () {
    let ts = this;
    let maxLeft = this.parent.offsetWidth - this.r * 2;
    let maxTop = this.parent.offsetHeight - this.r * 2;
    setInterval(function () {
        // console.log(ts);
        let left = ts.div.offsetLeft + ts.speedX;
        let top = ts.div.offsetTop + ts.speedY;
        if (left <= 0) {
            left = 0;
            ts.speedX = -ts.speedX;
        }
        if (top <= 0) {
            top = 0;
            ts.speedY = -ts.speedY;
        }
        if (left >= maxLeft) {
            left = maxLeft;
            ts.speedX = -ts.speedX;
        } if (top >= maxTop) {
            top = maxTop;
            ts.speedY = -ts.speedY;
        }
        ts.div.style.left = left + "px";
        ts.div.style.top = top + "px";
    }, 50);
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function randomColor() {
    let r = randomRange(0, 255);
    let g = randomRange(0, 255);
    let b = randomRange(0, 255);
    let a = randomRange(0, 1);
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}