const sections = [
    document.getElementById('section-main'),
    document.getElementById('section-location')
]

const buttons = [
    document.getElementById('button-main'),
    document.getElementById('button-location')
];

const setSection = x => {
    activeSection = x;

    sections.forEach(x => {
        x.style.setProperty('display', 'none');
    });

    buttons.forEach(x => {
        console.log(x)
        x.classList.remove('active-section');
    });

    sections[activeSection].style.display = null;
    buttons[activeSection].classList.add('active-section');

    
}

let activeSection = 0;

var decoratorURI = [
    'https://th.bing.com/th/id/OIG.75WqJIdBCn1SMIOhr8oN?pid=ImgGn',
    'https://th.bing.com/th/id/OIG.inA6OGemfnVesRebuTdr?pid=ImgGn',
    'https://th.bing.com/th/id/OIG.9.1P1fKIwJBlNLqOCZZC?pid=ImgGn',
    'https://static.vecteezy.com/system/resources/previews/013/855/181/large_2x/bouquet-of-pink-watercolor-flowers-free-png.png',
    'https://th.bing.com/th/id/OIG.EsVYQ8k6VemAULn4h2mp?pid=ImgGn',
    'https://th.bing.com/th/id/OIG.9.1P1fKIwJBlNLqOCZZC?pid=ImgGn'
];

Array.prototype.forEach.call(document.getElementsByClassName('decorator'), function(el) {
    el.src = decoratorURI[5];
});
