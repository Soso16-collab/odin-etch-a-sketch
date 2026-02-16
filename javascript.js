const sketchContainer = document.querySelector("#sketch-container")
const dimensionInput = document.querySelector("#dimension-input")
const colorRandomizerCheckbox = document.querySelector("#color-randomizer-input")
const progressiveDarkeningCheckbox = document.querySelector("#progressive-darkening-input")
let randomizeColors = false
let darkenColors = false
const shakeButton = document.querySelector("#shake-button")

function generateSketchGrid(size) {
    const totalGridCount = size * size
    for (let i = 0; i < totalGridCount; i++) {
    const sketchDiv = document.createElement("div")
    sketchDiv.classList.add("sketch-div")
    sketchDiv.style.boxSizing = "border-box"
    sketchDiv.style.width = `${(600/size)}px`
    sketchDiv.style.height = `${600/size}px`
    sketchDiv.style.backgroundColor = "#bcbdc6"
    sketchDiv.style.border = "2px solid black"
    sketchDiv.addEventListener("mouseenter", () => {
        if (randomizeColors === true) {
            let newColor = randomColor()
            sketchDiv.style.backgroundColor = newColor
        }
        else {
            sketchDiv.style.backgroundColor = "rgb(0, 0, 0)"
        }
        if (darkenColors === true) {
            sketchDiv.style.opacity = parseFloat(sketchDiv.style.opacity) + 0.1
        }
    })
    sketchContainer.appendChild(sketchDiv)
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function clearBoard() {
    const sketchDivs = sketchContainer.children
    for (const sketchDiv of sketchDivs) {
        sketchDiv.style.backgroundColor = "#bcbdc6"
        if (darkenColors === true) {
            sketchDiv.style.opacity = 0
        }
    }
}

dimensionInput.addEventListener("input", event => {
    if (event.target.value < 1) event.target.value = 1
    if (event.target.value > 100) event.target.value = 100
    sketchContainer.replaceChildren()
    generateSketchGrid(event.target.value)
})

colorRandomizerCheckbox.addEventListener("change", event => {
    clearBoard()
    randomizeColors = event.target.checked
})

progressiveDarkeningCheckbox.addEventListener("change", event => {
    clearBoard()
    darkenColors = event.target.checked
    const sketchDivs = sketchContainer.children
    for (const sketchDiv of sketchDivs) {
        if (event.target.checked) {
        sketchDiv.style.opacity = 0
        }
        else {
            sketchDiv.style.opacity = 1
        }
    }
})

shakeButton.addEventListener("click", () => {
    clearBoard()
})

generateSketchGrid(16)
