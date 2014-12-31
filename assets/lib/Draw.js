//Draw
var Draw = {
    canvas: null,
    ctx: null,

    clear: function (x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    },

    clearSpace: function (x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    },

    init: function (cID, cWidth, cHeight) {
        this.canvas = document.getElementById(cID);
        this.canvas.width = cWidth;
        this.canvas.height = cHeight;
        this.ctx = this.canvas.getContext('2d');
    },

    rectangle: function (x, y, h, w, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, h, w);
    },

    strokeRectangle: function (x, y, w, h, color) {
        this.ctx.fillStyle = color;
        this.ctx.strokeRect(x, y, w, h);
    },

    circle: function (x, y, r, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    },

    cloud: function () {
        // draw cloud
        this.ctx.beginPath();
        this.ctx.moveTo(170, 80);
        this.ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
        this.ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
        this.ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
        this.ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
        this.ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
        this.ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
        this.ctx.closePath();
        this.ctx.lineWidth = 1;
        this.ctx.fillStyle = '#FFF';
        this.ctx.fill();
        this.ctx.strokeStyle = '#FFF';
        this.ctx.stroke();


    },
    
    text: function (string, x, y, size, color, align) {
        this.ctx.font = size + 'px Verdana';
        this.ctx.textBaseline = 'top';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        this.ctx.fillText(string, x, y);
    }
};