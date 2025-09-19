let fill = document.querySelector(".progress-fill");
let num = document.querySelector("span");

let btn = document.querySelector("button");
count = 0
btn.addEventListener("click", function(){
    let timeout = setInterval(function(){
        if (count <= 100){
            num.textContent = count +"%";
            fill.style.width = count + "%";
            count++;
        }
    },3000/100)
});

clearTimeout(timeout);