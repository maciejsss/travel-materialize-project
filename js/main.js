const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// SLIDER

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
})