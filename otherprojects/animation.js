let main = document.querySelector(".main")
let round = document.querySelector(".animation")
 
main.addEventListener("mousemove",function(halle){
    round.style.left = halle.x+"px"
    round.style.top = halle.y+"px"
 })