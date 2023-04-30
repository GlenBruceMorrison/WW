
const navs = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('article');

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
}

showPage('schedule');


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