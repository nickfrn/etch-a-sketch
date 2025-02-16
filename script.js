// Create each div using a loop
const container = document.querySelector('.container');
const containerWidth = container.offsetWidth;

for (let i = 0; i < (16 * 16); i++) {
    const cell = document.createElement('div');
    const cellSize  = containerWidth * (1 / 16);

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.border = '1px solid black';
    cell.style.flexShrink = '0';
    cell.style.boxSizing = 'border-box';

    container.appendChild(cell);
}

// Make each div 1/nth of container to ensure a square grid
// Append each div to container