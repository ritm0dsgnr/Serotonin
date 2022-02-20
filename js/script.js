$(".slider__container").slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    variableWidth: true,
    autoplaySpeed: 3500,
    responsive: [
    {
        breakpoint: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
    },
    ]
});

