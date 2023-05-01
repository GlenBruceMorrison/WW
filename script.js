
const navs = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('article');
const menuToggle = document.getElementById('navbar')
const navCollapse = new bootstrap.Collapse(menuToggle);
const body = document.querySelector('body')

navs.forEach((nav) => {
    nav.addEventListener('click', (e) => {
        showPage(e.target.id.replace('nav-', ''));
    });
});

const showPage = (id) => {
    pages.forEach((page) => {
        page.style.display = 'none';
    });

    navs.forEach((nav) => {
        nav.classList.remove('active');
    });

    document.getElementById(`nav-${id}`).classList.add('active');
    document.getElementById(id).style.display = 'block';

    console.log(body.clientWidth);

    if (body.clientWidth < 992) {
        navCollapse.toggle();
    }
}

showPage('edinburgh');


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
        imageSrc: "https://www.visitscotland.com/wsimgs/_DSC5255_1633535904.jpg",
        title: "The Royal Botanic Garden Edinburgh",
        description: "The Royal Botanic Garden Edinburgh is one of the world's leading botanic gardens. Visitors can discover a history dating back over 350 years, learn about its plantings and walk around 70 acres of beautiful landscape. A pleasure for all the family, the Garden also offers a fantastic view of the capital's skyline.",
        link: "https://www.visitscotland.com/info/see-do/royal-botanic-garden-edinburgh-p246181",
        offset: 0,
        free: true
    },
    {
        imageSrc: "http://www.visitscotland.com/wsimgs/NMOS_GrandGallery_474597809.jpg",
        title: "National Museum of Scotland",
        description: 'Explore the diversity of the natural world, world cultures, art and design, science and technology and Scottish history, all in one amazing building.',
        link: "https://www.nms.ac.uk/scotland",
        offset: 0,
        free: true
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1634566005964-167440ff7580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80",
        title: "Scottish National Gallery",
        description: "The Scottish National Gallery is home to the national collection of fine art, from the early Renaissance to the end of the nineteenth century.",
        link: "https://www.nationalgalleries.org/visit/scottish-national-gallery",
        offset: 0,
        free: true
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1557335525-380f0bc8be34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80",
        title: "Arthur's Seat",
        description: "Arthur's Seat is one of four hill forts, dating from around 2,000 years ago. Situated within Holyrood Park, as well as it's rich cultural heritage, the park offers walks, solace, wildlife, volcanic geology and unparalleled vistas of the city from its many vantage points.",
        link: "https://www.tripadvisor.co.uk/Attraction_Review-g186525-d195211-Reviews-Arthur_s_Seat-Edinburgh_Scotland.html",
        offset: 0,
        free: true
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1670751780141-035f6458fd96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        title: "Edinburgh Zoo",
        description: "Edinburgh Zoo is owned by The Royal Zoological Society of Scotland (RZSS). The Society was founded in March 1909, and the Zoo opened in July 1913. Set in 82 acres of sloping parkland, the Zoo is situated three miles to the west of Edinburgh city centre.",
        link: "https://www.edinburghzoo.org.uk/",
        offset: 0,
        free: false
    },
    {
        imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/78/f0/9a.jpg",
        title: "Edinburgh Castle",
        description: "Edinburgh Castle is a historic fortress which dominates the skyline of Edinburgh, the capital city of Scotland, from its position on the Castle Rock. Archaeologists have established human occupation of the rock since at least the Iron Age, although the nature of the early settlement is unclear.",
        link: "https://www.edinburghcastle.scot/plan-your-visit/tickets",
        offset: 0,
        free: false
    },
    {
        imageSrc: "https://everythingedinburgh.com/wp-content/uploads/2021/05/Camera-Obscura-Edinburgh-Exhibition.jpg",
        title: "Camera Obscura and World of Illusions",
        description: "Camera Obscura and World of Illusions is a major tourist attraction in the Old Town, Edinburgh, Scotland. Founded by entrepreneur Maria Theresa Short in 1835 and a key member of the Association of Scottish Visitor Attractions, it claims to be the oldest purpose-built attraction in the city.",
        link: "https://www.camera-obscura.co.uk/",
        offset: 0,
        free: false
    },
    {
        imageSrc: "https://hiddenscotland.co/wp-content/uploads/2020/05/Victoria-Street-in-Edinburghs-Old-Town-1-of-1.jpg",
        title: "Edinburgh Old Town",
        description: "The Old Town is the name popularly given to the oldest part of Scotland's capital city of Edinburgh. The area has preserved much of its medieval street plan and many Reformation-era buildings. Together with the 18th/19th-century New Town, it forms part of a protected UNESCO World Heritage Site.",
        link: "https://www.tripadvisor.co.uk/Attraction_Review-g186525-d188785-Reviews-Edinburgh_Old_Town-Edinburgh_Scotland.html",
        offset: 0,
        free: true
    },
    {
        imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a4/5a/93/princes-street-gardens.jpg?w=1100&h=-1&s=1",
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
