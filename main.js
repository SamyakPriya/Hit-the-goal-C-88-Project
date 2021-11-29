
var canvas = new fabric.Canvas("myCanvas");

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaletoWidth(50);
		hole_obj.scaletoHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaletoWidth(50);
		ball_obj.scaletoHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	  else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	

function up()
{
    if(player_y >=0)
    {
        player_y = ball_y - block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When Up arrow is pressed, X = " + ball_x, + "Y =", ball_y);
        canvas.remove(ball_obj);
        player_update();
    }
}

function down()
{
    if(player_y <=450)
    {
        ball_y = ball_y + block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When Down arrow is pressed, X ="+ ball_x, + "Y =" + ball_y);
        canvas.remove(ball_obj);
        player_update();
    }
}

function left()
{
    if(player_x >5)
    {
        ball_x = ball_x - block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Left arrow is pressed, X =" + ball_x, "Y =" + ball_y);
        canvas.remove(ball_obj);
        player_update();
    }
}

function right()
{
    if(player_x <=1050)
    {
        ball_x = ball_x + block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Right arrow is pressed, X =" + ball_x, "Y =" + ball_y);
        canvas.remove(ball_obj);
        player_update();
    }
}
}
