
function createScrollLink(linkName, targetName) {
    const link = document.getElementById(linkName);
    const target = document.getElementById(targetName);
    link.addEventListener('click',  () => target.scrollIntoView({
        behavior: 'smooth'
    }));
}

createScrollLink("scroll-next", "location")

createScrollLink("scroll-main", "main")
createScrollLink("scroll-location", "location")
createScrollLink("scroll-directions", "directions")
createScrollLink("scroll-hotels", "hotels")