//board
let board;
let boardWidth = 1355;
let boardHeight = 575;

//nischay
let nischayWidth = 180;
let nischayHeight = 180;
let nischayX = boardWidth/2 - nischayWidth/2;
let nischayY = boardHeight*5/8;
let nischayIMG;

//physics
let velocityX = 0;
let velocityY = 0;

//platform
let platform;
let platformArray = [];
let platformWidth = 200;
let platformHeight = 200;
let platformIMG;

let nischay = {
    img : null,
    x : nischayX,
    y : nischayY,
    width : nischayWidth,
    height : nischayHeight
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board

    //draw nischay
    context.fillStyle = "transparent";
    context.fillRect(nischay.x, nischay.y, nischay.width, nischay.height);
    nischayIMG = new Image ();
    nischay.img = nischayIMG;
    nischayIMG.src = "Game/game-character.png";
    nischayIMG.onload = function(){
        context.drawImage(nischay.img, nischay.x, nischay.y, nischay.width, nischay.height);
    }

    requestAnimationFrame(clearAndMove);
    document.addEventListener("keydown", clearAndMove);

    platformIMG = new Image();
    platform.img = platformIMG;
    platformIMG.src = "Game/cloud.png";
    placePlatforms();
}

function clearAndMove(e){
    context.clearRect(0, 0, board.width, board.height)

    //change position
    nischay.x += velocityX;
    
    if(e.code == "ArrowRight" || e.code == "KeyD"){
        velocityX = 1
    }
    else if(e.code == "ArrowLeft" || e.code == "KeyA"){
        velocityX = -1
    }

    // Check boundaries
    if (nischay.x + nischayWidth > board.width || nischay.x < 0) {
        velocityX = -velocityX; // Reverse horizontal direction on collision with walls
    }
    if (nischay.y + nischayHeight > board.height || nischay.y < 0) {
        velocityY = -velocityY; // Reverse vertical direction on collision with walls
    }
    
    // Redraw the object in its new position
    context.drawImage(nischay.img, nischay.x, nischay.y, nischay.width, nischay.height);
    requestAnimationFrame(clearAndMove);

    for (let i = 0; i < platformArray.length; i++){
        let platform = platformArray[i];
        context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height)
    }
}

clearAndMove();

function placePlatforms(){
    platformArray = [];

    let platform = {
        img : platformIMG,
        x : boardWidth/2,
        y : boardHeight - 300,
        width : platformWidth,
        height : platformHeight
    }

    platformArray.push(platform);
}
