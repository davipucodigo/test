const canvas = document.getElementById("canvas")
canvas.width = 512
canvas.height = 512
canvas.style.border = "1px solid black"
const c = canvas.getContext("2d")

//sprite
var bloco1 = new Image()
bloco1.src = "sprites/spritesheet_vanhell_game.png"

// map
const map = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1]
]

var scale = 4
function Update(){
     // Uma gambiarra do carambulango
     for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            if (map[y][x] == 1) {
                c.drawImage( bloco1, 10*16,3*16,16,16, x*16*scale, y*16*scale, 16*scale, 16*scale)
            }
        }
    }
    //loop area
    requestAnimationFrame(Update)
}
Update()

c.imageSmoothingEnabled = false;