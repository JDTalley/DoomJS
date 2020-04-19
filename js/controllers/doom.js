// Set up scene
var canvas = new Canvas("game-canvas");
var width = canvas.width;
var height = canvas.height;

// Set up input
var keys = [];
window.onkeyup = function(e) { keys[e.code] = false; pframe = true;}
window.onkeydown = function(e) { keys[e.code] = true; }

// Textures
canvas.loadImages();

// Set up game variables
const SPAWNS = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
var paused = true;
var newGame = true;
var pframe = true;
var frame;
var lives;
var player = new Entity(0, 0, 0, 0, 0, 10, 90);
var level = level1;
var health = 100;
var armor = 100;
// Array of ammo.
// 0 Bullets, 1 Shells, 2 Rockets, 3 Cells
var ammo = [200, 0, 0, 0];
// Selected Gun
var gunIndex = 0;

var GAME_FPS = 60;
var msBetweenFrames = 1000 / GAME_FPS;

// Start Game
// reset();
startGame();

// Game Loop
function gameTick() {
    if (newGame) {
        redrawCanvas();
        // Wait for next frame
        queueTick();

    } else if (!paused) {
        // Frame Counter
        if (frame <= GAME_FPS) {
            frame += 1;
        } else {
            frame = 1;
        }

        // Check for input
        // Rotation
        // if(keys["KeyA"] || keys["ArrowLeft"]) {
        //     spaceship.rotate(-5);
        // }
        // if(keys["KeyD"] || keys["ArrowRight"]) {
        //     spaceship.rotate(5);
        // }

        // Acceleration / Deceleration
        // if(keys["KeyW"] || keys["ArrowUp"]) {
        //     spaceship.accelerate();
        // }
        // if(keys["KeyS"] || keys["ArrowDown"]) {
        //     spaceship.decelerate();
        // }

        // Pause
        if(pframe && (keys["Enter"] || keys["KeyP"])) {
            pauseGame(true);
        }

        // Shooting
        // if (keys["Space"]) {
        //     if (frame % 15 == 0) {
        //         bullets.push(spaceship.shoot(frame));
        //         sPew.play();
        //     };
        // }

        // Draw Scene
        redrawCanvas();

        // Wait for next frame
        queueTick();

    } else {
        if (pframe && (keys["Enter"] || keys["KeyP"])) {
            pauseGame(false);
        }

        // Wait for next frame
        queueTick();
    }

}

// Run Game
function startGame() {
    queueTick();
}
// Wait for next frame
function queueTick() {
    //setTimeout(gameTick, msBetweenFrames);
    requestAnimationFrame(gameTick);
}

function pauseGame(bool) {
    if (bool) {
        paused = !paused;
        pframe = false;
    } else {
        paused = !paused;
        message = "Paused";
        pframe = false;
    }
}

// Draw Scene
function redrawCanvas() {
    canvas.setBackground("#000000");

    if (canvas.imgLoaded == canvas.imgArr.length) {
        canvas.drawGun(gunIndex);
        canvas.drawHUD(ammo[gunIndex], health, gunIndex, armor, ammo);   
    }
    
    drawWalls(level.walls);

    //canvas.drawTestGrid();
}

// Initalize Level
function levelInit(level) {
    player.setX(level.start.x);
    player.setY(level.start.y);
    player.setO(level.o);
}

function drawWalls(wallArr) {
    for (let i = 0; i < 90; i++) {
        
    }
    for (let i = 0; i < wallArr.length; i++) {
        canvas.drawWall(wallArr[i]);
    }
}