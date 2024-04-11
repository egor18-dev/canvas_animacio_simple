const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Animation{

    constructor () 
    {
        this.ballPosY = -100;
        this.velocity = Number(prompt("Introdueix la velocitat", 0));
        this.drawMap();
    }

    drawMap()
    {
        ctx.beginPath(); 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.moveTo(canvas.width / 2, 0); 
        ctx.lineTo(canvas.width / 2, canvas.height); 
        ctx.stroke();
    }

    drawBall()
    {
        if(this.ballPosY <= canvas.height){
            this.ballPosY += this.velocity;
        }else if(this.ballPosY > canvas.height){
            this.ballPosY = -100;
        }

        ctx.beginPath();
        ctx.arc(canvas.width / 2, this.ballPosY, 10, 0, Math.PI * 2);
        ctx.fill();
    }

}

const animation = new Animation();
animation.drawBall();

const animate = () => {
    animation.drawMap();
    animation.drawBall();

    requestAnimationFrame(animate);
}

animate();