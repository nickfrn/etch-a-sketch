function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    // return an int value between "min" and "max" inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        const cell = document.createElement('div');
        const cellSize  = containerWidth * (1 / size);
    
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.classList.add('cellStyle');
    
        cell.addEventListener('mouseover', () => {
            let red = getRandomInt(0, 255);
            let green = getRandomInt(0, 255);
            let blue = getRandomInt(0, 255);

            cell.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
        })
    
        container.appendChild(cell);
    }
    
}

const container = document.querySelector('.container');
const containerWidth = container.offsetWidth;

const createBtn = document.querySelector('.createBtn');

createBtn.addEventListener('click', () => {
    let gridSize;

    do {
        gridSize = parseInt(prompt('Select size for your sketchpad [1 - 100]'));
    } while (gridSize < 1 || gridSize > 100);

    container.innerHTML = '';

    createGrid(gridSize);
})