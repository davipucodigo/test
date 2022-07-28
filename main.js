const canvas = document.getElementById("canvas")
canvas.width = 512
canvas.height = 512
canvas.style.border = "1px solid black"
const c = canvas.getContext("2d")
// Class
class Sprite {
    constructor (img,wid,hei,widcut,heicut,xcut,ycut,  ) {
        this.img = img
        this.scale = 16
        this.size = 4
        this.wid = wid
        this.hei = hei
        this.x
        this.y
        this.widcut = widcut
        this.heicut = heicut
        this.xcut = xcut
        this.ycut = ycut
    }
    Draw (x,y) {
        this.x = x
        this.y = y
        c.drawImage(this.img, this.xcut*this.scale, this.ycut*this.scale, this.scale, this.scale, this.x*this.scale*this.size, this.y*this.scale*this.size, this.wid*this.size, this.hei*this.size)
    }
}


//sprite
var spritesheet = new Image()
spritesheet.src = "sprites/spritesheet_vanhell_game.png"

var block1 = new Sprite(spritesheet,16,16,16,16,10,3)

var FireBoll = new Sprite(spritesheet,16,16,16,16,4,0)

// map
const map = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0],
    [1,1,1,1,1,1,1,1]
]


function Update(){
    c.fillStyle = 'black';
    c.fillRect(0,0,512,521)

     // Map Render
     for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] == 1) {
                block1.Draw(x,y)
            }
            if (map[y][x] == 2){
                FireBoll.Draw(x,y)
            }}}
            
    //loop area
    requestAnimationFrame(Update)
}
Update()

c.imageSmoothingEnabled = false;