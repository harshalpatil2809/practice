let main = document.querySelector("div")

window.addEventListener("mousemove", function(delt){
    main.style.top = delt.clientY + "px";
    main.style.left = delt.clientX + "px";

})