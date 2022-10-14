let searchBar = document.querySelector("#text")
let btn = document.getElementById("convert-btn")

let camel = document.getElementById("camel-case")
let pascal = document.getElementById("pascal-case")
let snake = document.getElementById("snake-case")
let screamSnake = document.getElementById("screaming-snake-case")
let kebab = document.getElementById("kebab-case")
let screamKebab = document.getElementById("screaming-kebab-case")


btn.addEventListener("click", () => {
    camel.textContent = Camel(searchBar.value)
    pascal.textContent = Pascal(searchBar.value)
    snake.textContent = Snake(searchBar.value)
    kebab.textContent = Kebab(searchBar.value)
    screamSnake.textContent = ScreamSnake(searchBar.value)
    screamKebab.textContent = ScreamKebab(searchBar.value)
})

function Camel(sentance) {
    let pascal = sentance.split(' ').map(word => word[0].toUpperCase().concat(word.slice(1))).join('')
    return (pascal[0].toLowerCase().concat(pascal.slice(1)))
}



function Pascal(sentance) {
    return sentance.split(' ').map(word => word[0].toUpperCase().concat(word.slice(1))).join('')
}


function Snake(sentance) {
    let snake = sentance.split(" ").map(word => "_".concat(word)).join("")
    return (snake.replace("_", ""))
}

function ScreamSnake(sentance) {
    let snake = sentance.split(" ").map(word => "_".concat(word)).join("")
    return(snake.replace("_", "").toUpperCase())
}

function Kebab(sentance) {
    let snake = sentance.split(" ").map(word => "-".concat(word)).join("")
    return(snake.replace("-", ""))
}

function ScreamKebab(sentance) {
    let snake = sentance.split(" ").map(word => "-".concat(word)).join("")
    return(snake.replace("-", "").toUpperCase())
}