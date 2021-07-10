var canvas=new fabric.Canvas("yourcanvas");
superhero_x=10;
superhero_y=10;
superimgwidth=30;
superimgheight=30;
var superhero_object="";
var superimgobject="";

function superhero_update() {
    fabric.image.fromURL("superhero.png",function(Img) {
        superhero_object=Img;
        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(140);
        superhero_object.set({top:superhero_y,left:superhero_x
        });   
    canvas.add(superhero_object);
});
}

 function new_image(getimage) 
 {
    fabric.Image.fromURL(getimage,function(Img) {
        superimgobject=Img;
        superimgobject.scaleToWidth(superimgwidth);
        superimgobject.scaleToHeight(superimgheight);
        superimgobject.set({top:superhero_y,left:superhero_x});
 canvas.add(superimgobject);
 });
}

 window.addEventListener("keydown",my_keydown);

 function my_keydown(e) 
 {
keyPressed=e.keyCode;
if (e.shiftKey==true && keyPressed=='80')
{
    superimgwidth=superimgwidth+10;
    superimgheight=superimgheight+10;
    document.getElementById("Current_width").innerHTML=superimgwidth;
    document.getElementById("Current_height").innerHTML=superimgheight;
}

if (e.shiftKey==true && keyPressed=='77')
{
    blockimgwidth=blockimgwidth-10;
    blockimgheight=blockimgheight-10;
    document.getElementById("Current_width").innerHTML=superimgwidth;
    document.getElementById("Current_height").innerHTML=superimgheight;
}

if (keyPressed=='38') 
{
up();
}
if (keyPressed=='40') 
{
down();
}
if (keyPressed=='37') 
{
left();
}
if (keyPressed=='39') 
{
right();
}
