
function createScrollLink(linkName, targetName) {
    const link = document.getElementById(linkName);
    const target = document.getElementById(targetName);
    link.addEventListener('click',  () => target.scrollIntoView({
        behavior: 'smooth'
    }));
}

const sections = [
    "home",
    "rsvp",
    "location",
    "hotels"
]