const sketchContainer = document.querySelector("#sketch-container")

function generateSketchGrid(size) {
    const totalGridCount = size * size
    console.log(totalGridCount)
    for (let i = 0; i < totalGridCount; i++) {
    const sketchDiv = document.createElement("div")
    sketchDiv.style.boxSizing = "border-box"
    sketchDiv.style.width = `${(960/size)}px`
    sketchDiv.style.height = `${960/size}px`
    sketchDiv.style.border = "2px solid red"
    sketchContainer.appendChild(sketchDiv)
    }
}

generateSketchGrid(16)
