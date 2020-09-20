document.addEventListener("DOMContentLoaded", function(){
    // Phase I: Setting up your Canvas Element
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');

    // Phase II: Draw a Rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(300, 140, 150, 100);

    // Phase III: Draw a Circle
    ctx.beginPath();
    ctx.arc(150, 350, 50, 0, 2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();

    // Phase IV: Draw your Favorite Shape!
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    // face
    ctx.beginPath();
    ctx.arc(150, 175, 60, 0, 2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    // mouth
    ctx.beginPath();
    ctx.arc(150, 175, 40, 0, Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();
    // eyes
    ctx.beginPath();
    ctx.arc(130, 150, 10, 0, 2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(170, 150, 10, 0, 2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
});
