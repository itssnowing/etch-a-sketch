const title = document.querySelector("h1");
const container = document.getElementById("container");
const grid = document.getElementById("grid-size");
const buttonDown = document.getElementById("down");
const buttonUp = document.getElementById("up");

let gridSize = document.getElementById("grid-size").innerHTML;
let color = "black";

const black = document.querySelector("#color-choices > .black");
const aqua = document.querySelector("#color-choices > .aqua");
const lime = document.querySelector("#color-choices > .lime");
const orange = document.querySelector("#color-choices > .orange");

function makeGrid(cells){
    container.style.gridTemplateColumns = "repeat(" + cells + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + cells + ", 1fr)";
    for(i = 0; i < cells * cells; i++){
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
    drawColor(color);
    changeColor();
}

function changeColor(){
    black.addEventListener("click", function(){
        color = "black";

        title.className = "";
        title.classList.add(color);

        black.classList.add("selected");
        aqua.classList.remove("selected");
        lime.classList.remove("selected");
        orange.classList.remove("selected");

        drawColor(color);
    });

    aqua.addEventListener("click", function(){
        color = "aqua";

        title.className = "";
        title.classList.add(color);

        aqua.classList.add("selected");
        black.classList.remove("selected");
        lime.classList.remove("selected");
        orange.classList.remove("selected");
        drawColor(color);
    });

    lime.addEventListener("click", function(){
        color = "lime";

        title.className = "";
        title.classList.add(color);

        lime.classList.add("selected");
        aqua.classList.remove("selected");
        black.classList.remove("selected");
        orange.classList.remove("selected");
        drawColor(color);
    });

    orange.addEventListener("click", function(){
        color = "orange";

        title.className = "";
        title.classList.add(color);

        orange.classList.add("selected");
        aqua.classList.remove("selected");
        lime.classList.remove("selected");
        black.classList.remove("selected");
        drawColor(color);
    });
}

function drawColor(color){
    let pixels = document.querySelectorAll("#container div");

    pixels.forEach(function(pixel){
        pixel.addEventListener("mouseenter", function(){
            pixel.className = "";
            pixel.classList.add(color);
        });
    });
}

function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function remakeGrid(){
    buttonDown.addEventListener("click", function(){
        if (gridSize > 2){
            let cells = --gridSize;
            grid.innerText = cells;
            removeGrid();
            makeGrid(cells);
        }
    });

    buttonUp.addEventListener("click", function(){
        if (gridSize < 64){
            let cells = ++gridSize;
            grid.innerText = cells;
            removeGrid();
            makeGrid(cells);
        }
    });
}

makeGrid(16);
remakeGrid();