let gridSize = getComputedStyle(document.documentElement).getPropertyValue('--gridSize');

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

function setColorOnHover(item){
    item.target.classList.add('grid-hover');
}

const grid = document.querySelectorAll('div[class="grid"]');

grid.forEach(item => item.addEventListener('mouseover', setColorOnHover));

