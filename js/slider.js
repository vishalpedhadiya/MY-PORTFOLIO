$('.owl-carousel').owlCarousel({
    loop: true,
    dots:true,
    margin: 10,
    nav: true,
    navText: [
    "",
    ""
  ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
