mouseEvent="empty";
color='green';
radius=25;
width=3;
last_x=0;
last_y=0;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;

    mouseEvent='mousedown';


}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent='mouseleave';

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent='mouseup';

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_x,current_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}



