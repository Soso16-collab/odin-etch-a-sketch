const sketchContainer = document.querySelector("#sketch-container")
const dimensionInput = document.querySelector("#dimension-input")

function generateSketchGrid(size) {
    const totalGridCount = size * size
    console.log(totalGridCount)
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
    sketchContainer.replaceChildren()
    generateSketchGrid(event.target.value)
})

generateSketchGrid(16)
