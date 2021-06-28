let gridSize = getComputedStyle(document.documentElement).getPropertyValue('--gridSize');

function createGrid(){
    const prevDiv = document.querySelectorAll('div');
    prevDiv.forEach(div => div.remove());
    for(let i = 0 ; i < gridSize; i++){
        const div = document.createElement('div');
        div.classList.add(`rows`);
        div.id = `row${i+1}`;
        document.body.appendChild(div);
    }
    
    const divs = document.querySelectorAll('div');
    
    for(let i = 0 ; i < gridSize; i++){
        for(let j = 0 ; j < gridSize; j++){
            const div = document.createElement('div');
            div.classList.add('grid');
            div.textContent = j+1;
            divs[i].appendChild(div);
        }
    }
}

function setColorOnHover(item){
    item.target.classList.add('grid-hover');
}

createGrid();
const grid = document.querySelectorAll('div[class="grid"]');

grid.forEach(item => item.addEventListener('mouseover', setColorOnHover));

const btn = document.querySelector('button[id="reset"]');

btn.addEventListener('click', () => {
    gridSize = parseInt(prompt('Please enter your desired grid size to reset'));
    if((gridSize > 0) && (gridSize <= 100) &&(Number.isInteger(gridSize))){}
    else gridSize = 16;
    createGrid();
})

