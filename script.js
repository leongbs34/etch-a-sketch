
for(let i = 0 ; i < 16; i++){
    const div = document.createElement('div');
    document.body.appendChild(div);
}

const divs = document.querySelectorAll('div');

for(let i = 0 ; i < 16; i++){
    for(let j = 0 ; j < 16; j++){
        const div = document.createElement('div');
        div.textContent = j+1;
        divs[i].appendChild(div);
    }
}