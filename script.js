let gridSize = getComputedStyle(document.documentElement).getPropertyValue('--gridSize');
const container = document.querySelector('#divContainer');

function createGrid(){
    const prevDiv = document.querySelectorAll('div[class="grid"]');
    prevDiv.forEach(div => div.remove());
    for(let i = 0 ; i < gridSize * gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('grid')
        container.appendChild(div);
    }

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    const grid = document.querySelectorAll('div[class="grid"]');
    grid.forEach(item => item.addEventListener('mouseover', setColorOnHover));
}

function setColorOnHover(item){
    item.target.style.backgroundColor = 'aqua';
}

createGrid();

const btn = document.querySelector('button[id="reset"]');

btn.addEventListener('click', () => {
    gridSize = parseInt(prompt('Please enter your desired grid size to reset'));
    if((gridSize > 0) && (gridSize <= 90) &&(Number.isInteger(gridSize))){}
    else gridSize = 16;
    createGrid();
})

