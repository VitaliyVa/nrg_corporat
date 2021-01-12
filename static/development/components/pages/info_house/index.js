import './index.scss';




$('.project_slider__block').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    autoplay: true,
    arrows: false,
});

$('.left_slide_arrow').click(function () {
    $(".project_slider__block").slick('slickPrev');
});
$('.right_slide_arrow').click(function () {
    $(".project_slider__block").slick('slickNext');
});




$('.info_house_content_plan__block').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    autoplay: true,
    arrows: false,


});
