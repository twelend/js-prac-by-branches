var cvs = document.getElementById("cvs")
var ctx = canvas.getContext("2d")



var position = {
    x: 0,
    y: 0
}

document.addEventListener("mousedown", () => {
    document.addEventListener('mousemove', draw);
    reposition(e);
})

function reposition(e){
    position.x = e.clientX - e
    position.y = e.clientY - e  
}