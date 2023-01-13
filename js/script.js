
let body = document.body;

//User アイコンをクリックしたら
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

//seach icon click
let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}

// menu iconクリックするとSide-Bar 表示

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}


// side bar Close button
document.querySelector('#side-bar-close-btn').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');

    if (window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }

}



// window  scroll
window.onscroll = () => {

    profile.classList.remove('active');
    searchForm.classList.remove('active');
    sideBar.classList.remove('active');

}