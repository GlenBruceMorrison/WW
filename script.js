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
