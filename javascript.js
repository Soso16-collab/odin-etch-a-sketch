const sketchContainer = document.querySelector("#sketch-container")
const dimensionInput = document.querySelector("#dimension-input")
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
        sketchDiv.style.backgroundColor = "black"
    })
    sketchContainer.appendChild(sketchDiv)
    }
}

dimensionInput.addEventListener("input", event => {
    if (event.target.value < 1) event.target.value = 1
    if (event.target.value > 100) event.target.value = 100
    sketchContainer.replaceChildren()
    generateSketchGrid(event.target.value)
})

shakeButton.addEventListener("click", () => {
    const sketchDivs = sketchContainer.children
    for (const sketchDiv of sketchDivs) {
        sketchDiv.style.backgroundColor = "#bcbdc6"
    }
})

generateSketchGrid(16)
