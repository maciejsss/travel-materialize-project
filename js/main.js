// SIDENAV

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

// AUTOCOMPLETE


const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "California": null,
        "Jamaica": null,
        "Europe": null,
        "Aruba": null,
    }
})

// Material Boxed


const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {})