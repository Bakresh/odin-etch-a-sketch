initializeGrid();
const btn = document.getElementById('change');
btn.addEventListener('click', createGrid);

function initializeGrid() {
    const container = document.querySelector('#container');
    const numberOfColumn = 16;
    const numberOfCell = 16 * 16;
    container.style.gridTemplateColumns = `repeat(${numberOfColumn}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfColumn}, 1fr)`;
    for (let i = 0; i < numberOfCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        document.getElementById('container').appendChild(cell);
        cell.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'black';
        });
    }
}

function createGrid() {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    const numberOfColumn = parseInt(prompt("Please enter a number of columns (1-100)."));
    if (!numberOfColumn) {
        alert("Invalid entry. Please click on the \"Change Cell Size\" button to try again.");
        return;
    } else if (numberOfColumn > 100) {
        alert("Too many! Please click on the \"Change Cell Size\" button to try again.");
        return;
    } else if (numberOfColumn < 1) {
        alert("The entry must be no lower than 1. Please click on the \"Change Cell Size\" button to try again.");
        return;
    }
    const numberOfCell = numberOfColumn * numberOfColumn;
    container.style.gridTemplateColumns = `repeat(${numberOfColumn}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfColumn}, 1fr)`;
    for (let i = 0; i < numberOfCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        document.getElementById('container').appendChild(cell);
        cell.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'black';
        });
    }
}