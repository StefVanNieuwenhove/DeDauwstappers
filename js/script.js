function app() {
    const images = [];
    for (let i = 1; i <= 20; i++) {
        images.push(`/images/2020/meldert/Meldert${i}.jpg`);
    }   
    console.log(images)
    images.forEach((img, index) => {
        document.getElementById('grid-container').insertAdjacentHTML('beforeend', 
        `<a href="/images//2020/meldert/Meldert${index+1}.jpg" target="_blank"><img
        src="/images/2020/meldert/Meldert${index+1}.jpg"></a>`)
    })
}

function init() {
    app();
}

onload = init;
