const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
canvas.style.width = "500px"
canvas.style.height = "500px"
canvas.style.border = "1px solid black"

var player = {
    image: "",
    sprite_tile: 0,
    x: 0,
    y: 0
}

function Draw() {
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,500,500)
    // animtion
    requestAnimationFrame(Draw)
}
requestAnimationFrame(Draw)

// o que move é a camera em função do cenario não o jogador.