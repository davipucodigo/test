const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

//sprite
var bloco1 = new Image()
bloco1.src = "sprites/spritesheet_vanhell_game.png"



// map
const map = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1]
]

for (var y = 0; y < map.length; y++) {
    for (var x = 0; x < map[y].length; x++) {
        console.log(map[y][x])
    }
}


function Update(){
    bloco1.addEventListener("load", () => {
        c.drawImage(bloco1, 30, 30)
    })
    //animate
    requestAnimationFrame(Update)
}
Update()