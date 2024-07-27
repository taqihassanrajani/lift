let container = document.querySelector(".container")

container.style.cssText = `
    width: 100%;
    height: 100vh;
    background-color: lightblue;
    position: relative;
`

let liftContainer = document.createElement("div")
let basement = document.createElement("div")
basement.innerText = "Basement"
let ground = document.createElement("div")
ground.innerText = "Ground"
let first = document.createElement("div")
first.innerText = "First"
let second = document.createElement("div")
second.innerText = "Second"
let third = document.createElement("div")
third.innerText = "Third"

container.appendChild(liftContainer)

liftContainer.style.cssText = `
width:30%;
height:100%;
background-color: lightgrey;
margin:0px auto;
border: 1px solid black;
`

basement.style.cssText = `
height:20%;
background-color:lightyellow;
`
ground.style.cssText = `
height:20%;
background-color:lightcorel;
`
first.style.cssText = `
height:20%;
background-color:lightskyblue;
`
second.style.cssText = `
height:20%;
background-color:lightpink;
`
third.style.cssText = `
height:20%;
background-color:lightseagreen;
`

liftContainer.appendChild(third)
liftContainer.appendChild(second)
liftContainer.appendChild(first)
liftContainer.appendChild(ground)
liftContainer.appendChild(basement)

let liftLeft = document.createElement("div")
let liftRight = document.createElement("div")

liftLeft.classList.add("liftLeft")
liftRight.classList.add("liftRight")


// liftLeft.style.cssText = `
//     width: 10%;
//     height: 20%;
//     background-color: blue;
//     z-index: 2;
//     position: absolute;
//     bottom: 0px;
//     left: 35%;
// `
// liftRight.style.cssText = `
//     width: 10%;
//     height: 20%;
//     background-color: red;
//     z-index: 2;
//     position: absolute;
//     bottom: 0px;
//     left: 55%;
// `
liftContainer.appendChild(liftLeft)
liftContainer.appendChild(liftRight)


let buttonDiv = document.createElement("div")

buttonDiv.style.cssText = `
    position: absolute;
    bottom: 0;
    right: 0;
`


let basementBtn = document.createElement("button")
basementBtn.innerText = "Basement"
basementBtn.classList.add("pointer")
// basementBtn.className = "pointer"
let groundBtn = document.createElement("button")
groundBtn.innerText = "Ground"
let firstBtn = document.createElement("button")
firstBtn.innerText = "First"
let secondBtn = document.createElement("button")
secondBtn.innerText = "Second"
let thirdBtn = document.createElement("button")
thirdBtn.innerText = "Third"

buttonDiv.appendChild(basementBtn)
buttonDiv.appendChild(groundBtn)
buttonDiv.appendChild(firstBtn)
buttonDiv.appendChild(secondBtn)
buttonDiv.appendChild(thirdBtn)

container.appendChild(buttonDiv)

basementBtn.addEventListener("click", () => {

    basementBtn.classList.add("pointer")
    groundBtn.classList.remove("pointer")
    firstBtn.classList.remove("pointer")
    secondBtn.classList.remove("pointer")
    thirdBtn.classList.remove("pointer")
})
groundBtn.addEventListener("click", () => {

    // ground Button click howa

    liftLeft.classList.add("liftLeftClose")
    liftRight.classList.add("liftRightClose")

    function liftUp() {
        liftLeft.classList.add("liftLeftUpGround")
        liftRight.classList.add("liftRightUpGround")
    }
    setTimeout(liftUp, 2000);

    function liftClose() {
        liftLeft.classList.remove("liftLeftClose")
        liftRight.classList.remove("liftRightClose")
        liftLeft.classList.add("liftLeftOpen")
        liftRight.classList.add("liftRightOpen")

    }
    setTimeout(liftClose, 6000);

    groundBtn.classList.add("pointer")
    basementBtn.classList.remove("pointer")
    firstBtn.classList.remove("pointer")
    secondBtn.classList.remove("pointer")
    thirdBtn.classList.remove("pointer")
})
firstBtn.addEventListener("click", () => {

    // first Button click howa

    liftLeft.classList.add("liftLeftClose")
    liftRight.classList.add("liftRightClose")

    function liftUp() {
        liftLeft.classList.add("liftLeftUpFirst")
        liftRight.classList.add("liftRightUpFirst")
    }
    setTimeout(liftUp, 2000);

    function liftClose() {
        liftLeft.classList.remove("liftLeftClose")
        liftRight.classList.remove("liftRightClose")
        liftLeft.classList.add("liftLeftOpen")
        liftRight.classList.add("liftRightOpen")

    }
    setTimeout(liftClose, 6000);

    firstBtn.classList.add("pointer")
    basementBtn.classList.remove("pointer")
    groundBtn.classList.remove("pointer")
    secondBtn.classList.remove("pointer")
    thirdBtn.classList.remove("pointer")
})
secondBtn.addEventListener("click", () => {
    // second Button click howa

    liftLeft.classList.add("liftLeftClose")
    liftRight.classList.add("liftRightClose")

    function liftUp() {
        liftLeft.classList.add("liftLeftUpSecond")
        liftRight.classList.add("liftRightUpSecond")
    }
    setTimeout(liftUp, 2000);

    function liftClose() {
        liftLeft.classList.remove("liftLeftClose")
        liftRight.classList.remove("liftRightClose")
        liftLeft.classList.add("liftLeftOpen")
        liftRight.classList.add("liftRightOpen")

    }
    setTimeout(liftClose, 6000);

    secondBtn.classList.add("pointer")
    basementBtn.classList.remove("pointer")
    groundBtn.classList.remove("pointer")
    firstBtn.classList.remove("pointer")
    thirdBtn.classList.remove("pointer")
})
thirdBtn.addEventListener("click", () => {
    // third Button click howa

    liftLeft.classList.add("liftLeftClose")
    liftRight.classList.add("liftRightClose")

    function liftUp() {
        liftLeft.classList.add("liftLeftUpThird")
        liftRight.classList.add("liftRightUpThird")
    }
    setTimeout(liftUp, 2000);

    function liftClose() {
        liftLeft.classList.remove("liftLeftClose")
        liftRight.classList.remove("liftRightClose")
        liftLeft.classList.add("liftLeftOpen")
        liftRight.classList.add("liftRightOpen")

    }
    setTimeout(liftClose, 6000);

    thirdBtn.classList.add("pointer")
    basementBtn.classList.remove("pointer")
    groundBtn.classList.remove("pointer")
    firstBtn.classList.remove("pointer")
    secondBtn.classList.remove("pointer")
})