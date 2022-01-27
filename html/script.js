function renderPlaats() {
    document.getElementById('title').innerHTML = 'plaats';
    this._plaatsen = ["Liedekerke", "Iddergem", "Meldert"];
    this._plaatsen.sort();
    this._plaatsen.forEach(value => {
        const option = document.createElement('option');
        option.setAttribute('label', value);
        option.innerText = value;
        document.getElementById('2022').appendChild(option);
        option.addEventListener('click', document.getElementById('title').innerHTML = `${value}`);
    })
}

function toonTitel(value) {
    console.log(value);
    document.getElementById('title').innerHTML = '';
    document.getElementById('title').innerHTML = `${value}`;
}

function toonFotos(plaats) {
    document.getElementById('title').innerHTML = plaats;
}


function init() {
     renderPlaats();
}

onload = init;