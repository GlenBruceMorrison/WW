
function createScrollLink(linkName, targetName) {
    const link = document.getElementById(linkName);
    const target = document.getElementById(targetName);
    link.addEventListener('click',  () => target.scrollIntoView({
        behavior: 'smooth'
    }));
}

const sections = [
    "home",
    "schedule",
    "hotels"
]

const activeSection = () => {
    return document.querySelector('.active-section').id;
}

const setActiveSection = (x) => {
    for (let element of sections) {
      document.getElementById(element).style.display = 'none';
      document.getElementById(`nav-${element}`).classList.remove('selected');
    }

    document.getElementById(sections[x]).style.display = 'block'
    document.getElementById(`nav-${sections[x]}`).classList.add('selected');
}

