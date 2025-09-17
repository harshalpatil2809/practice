let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let main = document.createElement("div");
    main.classList.add("main");


    let profilepic = document.createElement("div")
    profilepic.classList.add("profilepic");


    let img = document.createElement("img")
    img.setAttribute("src", inputs[0].value)

    profilepic.appendChild(img)

    let info = document.createElement("div")
    info.classList.add("info")

    let h1 = document.createElement("h1")
    h1.textContent = inputs[1].value
    let h3 = document.createElement("h3")
    h3.textContent = "Age is "+ inputs[2].value
    let h5 = document.createElement("h5")
    h5.textContent = inputs[3].value
    
    info.appendChild(h1);
    info.appendChild(h3);
    info.appendChild(h5);

    main.appendChild(profilepic);
    main.appendChild(info);

    document.body.appendChild(main)

    inputs.forEach(function(inp){
        if ( inp.type !== "submit"){
            inp.value = ""
        }
    })
});