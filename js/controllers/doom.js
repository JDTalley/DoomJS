// Set up scene
const uiCanvas = new UICanvas("game-canvas");
const width = uiCanvas.width;
const height = uiCanvas.height;

// Set up Map
const mapCanvas = new MapCanvas("map-canvas");

// Set up input
const keys = [];
window.onkeyup = function(e) { keys[e.code] = false; pframe = true;}
window.onkeydown = function(e) { keys[e.code] = true; }

// Textures
uiCanvas.loadImages();

// Set up game variables
const SPAWNS = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
let paused = true;
let newGame = true;
let pframe = true;
let frame;
let lives;
let player = new Player(500,500, 0, 0, 0, 10);
let level = level1;
let health = 100;
let armor = 100;
// Array of ammo.
// 0 Bullets, 1 Shells, 2 Rockets, 3 Cells
let ammo = [200, 0, 0, 0];
// Selected Gun
let gunIndex = 0;

const GAME_FPS = 60;
const msBetweenFrames = 1000 / GAME_FPS;

// Start Game
startGame();

// Game Loop
function gameTick() {
    if (newGame) {
        redrawuiCanvas();
        // Wait for next frame
        queueTick();

    } else if (!paused) {
        // Frame Counter
        if (frame <= GAME_FPS) {
            frame += 1;
        } else {
            frame = 1;
        }

        // Pause
        if(pframe && (keys["Enter"] || keys["KeyP"])) {
            pauseGame(true);
        }

        // Draw Scene
        redrawuiCanvas();

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
    levelInit(level1);
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
function redrawuiCanvas() {
    uiCanvas.setBackground("#000000");
    mapCanvas.drawBackground("#000");

    if (uiCanvas.imgLoaded == uiCanvas.imgArr.length) {
        uiCanvas.drawGun(gunIndex);
        uiCanvas.drawHUD(ammo[gunIndex], health, gunIndex, armor, ammo);   
    }

    let pos = worldToLocalCoords(player.pos);
    mapCanvas.drawRay(pos);

    level.bounds.forEach(bound => {
        // Draw Boundary on Map
        const startPos = worldToLocalCoords(bound.p1);
        const endPos = worldToLocalCoords(bound.p2);

        mapCanvas.drawLine(startPos, endPos, '#FF0000');
    })

    player.rays.forEach(ray => {
        let smallestRayLength = 100000;
        let smallestRay;

        level.bounds.forEach(bound => {
            let newRay = ray.cast(bound);
            //console.log(lineLength(player.pos, newRay), smallestRay);

            let newRayLength = lineLength(player.pos, newRay);
            //console.log(ray, bound, newRayLength, smallestRayLength)

            if (newRayLength < smallestRayLength) {
                smallestRayLength = newRayLength;
                smallestRay = newRay;
            }
        });

        smallestRay = worldToLocalCoords(smallestRay);
        mapCanvas.drawLine(pos, smallestRay, '#fff');
    });

    //let ray = player.rays[0].cast(level.bounds[0]);
    //ray = worldToLocalCoords(ray);
    //mapCanvas.drawLine(pos, ray, '#FFF');
}

// Initalize Level
function levelInit(level) {
    player.pos.x = (level.start.x);
    player.pos.y = (level.start.y);
    player.setO(level.o);
    player.addRay();
}

function worldToLocalCoords(pos) {
    const x = (pos.x / level.size) * mapCanvas.width;
    const y = (pos.y / level.size) * mapCanvas.height;

    return {x: x, y: y};
}

function lineLength(pos1, pos2) {
    return Math.sqrt((pos2.x - pos1.x) ** 2 + (pos2.y - pos1.y) ** 2);
}