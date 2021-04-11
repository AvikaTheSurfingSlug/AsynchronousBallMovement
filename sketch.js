var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locOfChild = database.ref("Ball/Position");
    locOfChild.on("value",readOp)

}

function draw(){
    background("white");
    if(keyDown("A")){
        writePosition(-1,0);
    }
    else if(keyDown("D")){
        writePosition(1,0);
    }
    else if(keyDown("W")){
        writePosition(0,-1);
    }
    else if(keyDown("S")){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/Position").set({
        x:ball.x+x,
        y:ball.y+y
    })
}
function readOp(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}