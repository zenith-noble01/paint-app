

const colorCircle = document.querySelector('.colorCircle');

let penSize = 10;
let Drawing;

let x;
let y;

let Canvas = document.querySelector('canvas');
can = Canvas.getContext('2d');
 //this is when the default mouse pointer is click or down
Canvas.addEventListener('mousedown', (e) =>{
    Drawing = true;
    x = e.offsetX;
    y = e.offsetY;
   console.log(x,y)
});

 //this is when the default mouse pointer is release or up
Canvas.addEventListener('mouseup', () =>{
    Drawing = false;
    x = undefined;
    y = undefined
    console.log(x,y)
});
//definig the Draw function
function Draw(x2, y2){
    if(Drawing){
        can.beginPath();
        can.arc(x2, y2, penSize, 0, Math.PI*2);
        can.closePath();
        can.fill();
        drawLine(x, y, x2, y2);
    }
    x = x2;
    y = y2;
}

can.fillStyle = 'blue';
can.strokeStyle = can.fillStyle;

function drawLine(x1, y1, x2, y2){
    can.beginPath();
    can.moveTo(x1, y1);
    can.lineTo(x2, y2);
    can.strokeStyle = can.fillStyle;
    can.lineWidth = penSize *2;
    can.stroke();
}

//here this is when the mouse is moved
Canvas.addEventListener('mousemove', (event) =>{
    Draw(event.offsetX, event.offsetY)
})

document.querySelector('.refresh-btn').addEventListener('click', function(){
    can.clearRect(0,0, Canvas.width, Canvas.height)
});



const chooseColor = (elem) =>{
    removeActivecolorCircle();
    can.fillStyle = elem.getAttribute('data-color');
    elem.classList.add('active')
}

const removeActivecolorCircle = () =>{
    colorCircle.forEach((circle) => {
        circle.classList.remove('active')        
    });
}

const Favcolor = (elem) =>{
    removeActivecolorCircle();
    can.fillStyle = elem.value;
}

function penSizeChange (pensize){
    penSize = pensize
}

document.querySelector('a').addEventListener('click', (event) =>event.target.href=Canvas.toDataURL())

//https://www.youtube.com/watch?v=RGOj5y47evk