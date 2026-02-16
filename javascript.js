const sketchContainer = document.querySelector("#sketch-container")

function generateSketchGrid(size) {
    const totalGridCount = size * size
    console.log(totalGridCount)
    for (let i = 0; i < totalGridCount; i++) {
    const sketchDiv = document.createElement("div")
    sketchDiv.style.boxSizing = "border-box"
    sketchDiv.style.width = `${(600/size)}px`
    sketchDiv.style.height = `${600/size}px`
    sketchDiv.style.backgroundColor = "#bcbdc6"
    sketchDiv.addEventListener("mouseenter", () => {
        sketchDiv.style.backgroundColor = "black"
    })
    sketchContainer.appendChild(sketchDiv)
    }
}

generateSketchGrid(16)
