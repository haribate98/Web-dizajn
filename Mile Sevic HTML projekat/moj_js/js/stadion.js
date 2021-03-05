(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var grd1 = ctx.createLinearGradient(0, 0, 0, 600);
    grd1.addColorStop(0, '#1FA2CF');
    grd1.addColorStop(1, '#A8E9FF');

    var grd2 = ctx.createRadialGradient(750, 0, 0, 750, 0, 200);
    grd2.addColorStop(0, '#F9FC97');
    grd2.addColorStop(1, '#E3EB02');

    var grd3 = ctx.createLinearGradient(0, 0, 150, 0);
    grd3.addColorStop(0, 'red');
    grd3.addColorStop(1, 'white');

    var ballimg = document.getElementById('ball');

    function draw() {
        ctx.save();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = grd1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#4CE079';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height * 4.6, canvas.height * 4, 0, Math.PI * 2, false);
        ctx.fill();

        ctx.fillStyle = '#DCE0DD';
        ctx.fillRect(0, 350, 80, 15);
        ctx.fillRect(80, 350, 15, 250);

        ctx.fillRect(800, 350, -80, 15);
        ctx.fillRect(720, 350, 15, 250);

        ctx.strokeStyle = '#DCE0DD';
        ctx.lineWidth = 3;
        ctx.beginPath();

        ctx.moveTo(0, 350);
        ctx.lineTo(80, 400);
        ctx.moveTo(0, 400);
        ctx.lineTo(80, 450);
        ctx.moveTo(0, 450);
        ctx.lineTo(80, 500);
        ctx.moveTo(0, 500);
        ctx.lineTo(80, 550);
        ctx.moveTo(0, 550);
        ctx.lineTo(80, 600);

        ctx.moveTo(800, 350);
        ctx.lineTo(720, 400);
        ctx.moveTo(800, 400);
        ctx.lineTo(720, 450);
        ctx.moveTo(800, 450);
        ctx.lineTo(720, 500);
        ctx.moveTo(800, 500);
        ctx.lineTo(720, 550);
        ctx.moveTo(800, 550);
        ctx.lineTo(720, 600);

        ctx.stroke();

        ctx.fillStyle = grd2;
        ctx.beginPath();
        ctx.arc(750, 0, 200, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = grd3;
        ctx.font = '40px Arial';
        ctx.fillText('Marakana', 10, 40);

        // Rotacija lopte je "dodatna funkcionalnost"
        ctx.save();
        var t = Math.sin(Date.now() / 1000);
        var x = 400 + 350 * t;
        var y = 400 + 150 * (t * t);
        ctx.translate(x, y);
        ctx.rotate(Math.PI * 2 * t);
        ctx.drawImage(ballimg, -25, -25, 50, 50);
        ctx.restore();

        ctx.restore();
    }
    
    requestAnimationFrame(function frame() {
        draw();
        requestAnimationFrame(frame);
    })
})();
