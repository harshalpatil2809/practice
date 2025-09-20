let match = window.matchMedia("(prefers-color-scheme: dark)").matches

function applytheme(theme){
    document.body.classList.remove("dark", "light")
    document.body.classList.add(theme)
}

function getSystemtheme(){
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setInitialTheme(){
    const savedtheme = localStorage.setItem("theme");
    applytheme(savedtheme || getSystemtheme());
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){
    if(!localStorage.getItem("theme")){
        applytheme(getSystemtheme());
    }

})


document.querySelector("button").addEventListener("click", function(){
    const currenttheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
    const newtheme = currenttheme === "dark" ? "light" : "dark"
    applytheme(newtheme)
    localStorage.setItem("theme", newtheme)
})

