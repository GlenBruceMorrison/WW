
const navs = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('article');
const menuToggle = document.getElementById('navbar')
const body = document.querySelector('body')

navs.forEach((nav) => {
    nav.addEventListener('click', (e) => {
        showPage(e.target.id.replace('nav-', ''));
    });
});

const showPage = (id, first=false) => {
    pages.forEach((page) => {
        page.style.display = 'none';
    });

    navs.forEach((nav) => {
        nav.classList.remove('active');
    });

    document.getElementById(`nav-${id}`).classList.add('active');
    document.getElementById(id).style.display = 'block';

    if (body.clientWidth < 992 && !first) {
        const navCollapse = new bootstrap.Collapse(menuToggle);
        navCollapse.toggle();
    }
}

showPage('main', true);


const eveningBtn = document.getElementById("btnEvening");
const dayBtn = document.getElementById("btnDay");
const dayElements = document.getElementsByClassName("day");

eveningBtn.addEventListener("click", () => {
    for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].style.display = "none";
    }
});

dayBtn.addEventListener("click", () => {
    for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].style.display = "block";
    }
});

var data = [
    {
        imageSrc: "assets/gardens.jpg",
        title: "The Royal Botanic Garden Edinburgh",
        description: "The Royal Botanic Garden Edinburgh is one of the world's leading botanic gardens. Visitors can discover a history dating back over 350 years, learn about its plantings and walk around 70 acres of beautiful landscape. A pleasure for all the family, the Garden also offers a fantastic view of the capital's skyline.",
        link: "https://www.visitscotland.com/info/see-do/royal-botanic-garden-edinburgh-p246181",
        offset: 0,
        free: true
    },
    {
        imageSrc: "assets/museum.jpg",
        title: "National Museum of Scotland",
        description: 'Explore the diversity of the natural world, world cultures, art and design, science and technology and Scottish history, all in one amazing building.',
        link: "https://www.nms.ac.uk/scotland",
        offset: 0,
        free: true
    },
    {
        imageSrc: "assets/gallery.avif",
        title: "Scottish National Gallery",
        description: "The Scottish National Gallery is home to the national collection of fine art, from the early Renaissance to the end of the nineteenth century.",
        link: "https://www.nationalgalleries.org/visit/scottish-national-gallery",
        offset: 0,
        free: true
    },
    {
        imageSrc: "assets/seat.avif",
        title: "Arthur's Seat",
        description: "Arthur's Seat is one of four hill forts, dating from around 2,000 years ago. Situated within Holyrood Park, as well as it's rich cultural heritage, the park offers walks, solace, wildlife, volcanic geology and unparalleled vistas of the city from its many vantage points.",
        link: "https://www.tripadvisor.co.uk/Attraction_Review-g186525-d195211-Reviews-Arthur_s_Seat-Edinburgh_Scotland.html",
        offset: 0,
        free: true
    },
    {
        imageSrc: "assets/zoo.avif",
        title: "Edinburgh Zoo",
        description: "Edinburgh Zoo is owned by The Royal Zoological Society of Scotland (RZSS). The Society was founded in March 1909, and the Zoo opened in July 1913. Set in 82 acres of sloping parkland, the Zoo is situated three miles to the west of Edinburgh city centre.",
        link: "https://www.edinburghzoo.org.uk/",
        offset: 0,
        free: false
    },
    {
        imageSrc: "assets/edinburgh-castle.jpg",
        title: "Edinburgh Castle",
        description: "Edinburgh Castle is a historic fortress which dominates the skyline of Edinburgh, the capital city of Scotland, from its position on the Castle Rock. Archaeologists have established human occupation of the rock since at least the Iron Age, although the nature of the early settlement is unclear.",
        link: "https://www.edinburghcastle.scot/plan-your-visit/tickets",
        offset: 0,
        free: false
    },
    {
        imageSrc: "/assets/obscura.jpg",
        title: "Camera Obscura and World of Illusions",
        description: "Camera Obscura and World of Illusions is a major tourist attraction in the Old Town, Edinburgh, Scotland. Founded by entrepreneur Maria Theresa Short in 1835 and a key member of the Association of Scottish Visitor Attractions, it claims to be the oldest purpose-built attraction in the city.",
        link: "https://www.camera-obscura.co.uk/",
        offset: 0,
        free: false
    },
    {
        imageSrc: "/assets/old-town.jpg",
        title: "Edinburgh Old Town",
        description: "The Old Town is the name popularly given to the oldest part of Scotland's capital city of Edinburgh. The area has preserved much of its medieval street plan and many Reformation-era buildings. Together with the 18th/19th-century New Town, it forms part of a protected UNESCO World Heritage Site.",
        link: "https://www.tripadvisor.co.uk/Attraction_Review-g186525-d188785-Reviews-Edinburgh_Old_Town-Edinburgh_Scotland.html",
        offset: 0,
        free: true
    },
    {
        imageSrc: "/assets/princess-street.jpg",
        title: "Princess Street Gardens",
        description: "Princes Street Gardens is a public park in the centre of Edinburgh, Scotland, in the shadow of Edinburgh Castle. The Gardens were created in two phases in the 1770s and 1820s following the long draining of the Nor Loch and building of the New Town, beginning in the 1760s. The loch, situated on the north side of the town, was originally an artificial creation forming part of its medieval defences.",
        link: "https://www.tripadvisor.co.uk/Attraction_Review-g186525-d187695-Reviews-Princes_Street_Gardens-Edinburgh_Scotland.html",
        offset: 0,
        free: true
    },
];


var template = document.getElementById("attractions").innerHTML;
var container = document.getElementById("attractions-container");

for (var i = 0; i < data.length; i++) {
    var html = Mustache.render(template, data[i]);
    container.innerHTML += html;
}
