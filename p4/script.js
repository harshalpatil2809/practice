let inp = document.querySelector("input")
let out = document.querySelector("span")
inp.addEventListener("keydown", function(dets){
    out.textContent = 20 - (dets.target.value.length)
})