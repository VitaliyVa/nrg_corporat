import './calculator.scss';
import './index.scss';


$('.project_slider__block').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    autoplay: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 1,
            }
        }]
});

$('.left_slide_arrow').click(function () {
    $(".project_slider__block").slick('slickPrev');
});
$('.right_slide_arrow').click(function () {
    $(".project_slider__block").slick('slickNext');
});


$('.investment_list_btn').on('click', function () {
    let wrapper = $(this).parents('.investment_list__block');
    $(wrapper).toggleClass('active');
})



$(function () {
    let first_output = $('.first_output')[0];
    let second_output = $('.second_output')[0];
    let third_output = $('.third_output')[0];
    let four_output = $('.four_output')[0];

    let first_out = $('.cost_calk')[0];
    let second_out = $('.profit_calk')[0];
    let third_out = $('.cost_calk_2')[0];
    let four_out = $('.profit_calk_2')[0];

    let current_year = 4;
    let current_kilowatt = 25;
    let kilowatt_ratio = 7000 / 40;
    let price;
    let profit;

    let current_year_2 = 5;
    let current_kilowatt_2 = 40;

    let slider = document.getElementById('slider1');
    noUiSlider.create(slider, {
        start: [25],
        connect: [true, false],
        range: {
            'min': 1,
            'max': 50
        },
        tooltips: false,
    });

    let val_kilowatt;
    slider.noUiSlider.on('update', function (values) {
        val_kilowatt = Math.floor(values[0]);
        first_output.innerHTML = val_kilowatt + " кВт";
        current_kilowatt = val_kilowatt;
        price = Math.round(current_kilowatt * (kilowatt_ratio * current_year));
        second_out.innerHTML = '€ ' + price;
        profit = Math.round(750 * current_kilowatt);
        first_out.innerHTML = '€ ' + profit;
    });

    let slider2 = document.getElementById('slider2');
    noUiSlider.create(slider2, {
        start: [4],
        connect: [true, false],
        range: {
            'min': 1,
            'max': 10
        },
        tooltips: false,
    });
    let val_floor2;
    slider2.noUiSlider.on('update', function (values) {
        val_floor2 = Math.floor(values[0]);
        second_output.innerHTML = val_floor2;
        current_year = val_floor2;
        price = Math.round(current_kilowatt * (kilowatt_ratio * current_year));
        second_out.innerHTML = '€ ' + price;
        profit = Math.round(750 * current_kilowatt);
        first_out.innerHTML = '€ ' + profit;
    });
    //
    let slider3 = document.getElementById('slider3');
    noUiSlider.create(slider3, {
        start: [40],
        connect: [true, false],
        range: {
            'min': 40,
            'max': 400
        },
        tooltips: false,
    });
    let val_floor3;
    slider3.noUiSlider.on('update', function (values) {
        val_floor3 = Math.floor(values[0]);
        third_output.innerHTML = val_floor3 + " кВт";
        current_kilowatt_2 = val_floor3;
        price = Math.round((7000 * current_year_2) * (current_kilowatt_2 / 40));
        four_out.innerHTML = '€ ' + price;
        profit = Math.round(current_kilowatt_2 * 750);
        third_out.innerHTML = '€ ' + profit;
    });
    //
    let slider4 = document.getElementById('slider4');
    noUiSlider.create(slider4, {
        start: [5],
        connect: [true, false],
        range: {
            'min': 1,
            'max': 10
        },
        tooltips: false,
    });
    let val_floor4;
    slider4.noUiSlider.on('update', function (values) {
        val_floor4 = Math.floor(values[0]);
        four_output.innerHTML = val_floor4;
        current_year_2 = val_floor4;
        price = Math.round((7000 * current_year_2) * (current_kilowatt_2 / 40));
        four_out.innerHTML = '€ ' + price;
        profit = Math.round(current_kilowatt_2 * 750);
        third_out.innerHTML = '€ ' + profit;
    });
});

$.extend($.lazyLoadXT, {
    edgeY: 250,
    srcAttr: 'data-src'
});

$(".scroll_all").on('click', function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    let destContacts = (destination - 100)
    $('html, body').animate({
        scrollTop: destContacts
    }, 600);
    return false;
});

$('.consultation_js').fancybox({
    touch: false,
    scrolling: 'hidden',
});

let check_box = "З прив'язкою до виробітку електроенерії";
let first_output = $('.first_output');
let second_output = $('.second_output');
let third_output = $('.third_output');
let four_output = $('.four_output');

let first_num = first_output.text().replace(/\s+/g, '');
let second_num = second_output.text().replace(/\s+/g, '');
let third_num = third_output.text().replace(/\s+/g, '');
let four_num = four_output.text().replace(/\s+/g, '');

let cost_calk = $('.cost_calk');
let cost_calk_2 = $('.cost_calk_2');
let profit_calk = $('.profit_calk');
let profit_calk_2 = $('.profit_calk_2');

let hidden_input_1 = $('.input_check_box');
let hidden_input_2 = $('.input_first_output');
let hidden_input_3 = $('.input_second_output');
let hidden_input_4 = $('.input_cost_calk');
let hidden_input_5 = $('.input_profit_calk');

hidden_input_1.val(check_box);
hidden_input_2.val(first_num);
hidden_input_3.val(second_num);
hidden_input_4.val(cost_calk.text());
hidden_input_5.val(profit_calk.text());
let first_range_block = $('.first_range-block')[0];
let first_ranges = $('.first_range');

$('.lab-1').on('click', function () {
    check_box = "З прив'язкою до виробітку електроенерії";
    $('#main_calculator_1').removeClass('main_calculator_hidden');
    $('#main_calculator_2').addClass('main_calculator_hidden');
    $('.radio-block').addClass('version_1');
    $('.radio-block').removeClass('version_2');
});
$('.lab-2').on('click', function () {
    check_box = "З гарантованою виплатою";
    $('#main_calculator_2').removeClass('main_calculator_hidden');
    $('#main_calculator_1').addClass('main_calculator_hidden');
    $('.radio-block').removeClass('version_1');
    $('.radio-block').addClass('version_2');
});

$('.calc_btn_1').on('click', function () {
    first_num = first_output.text().replace(/\s+/g, '');
    second_num = second_output.text().replace(/\s+/g, '');
    hidden_input_1.val(check_box);
    hidden_input_2.val(first_num);
    hidden_input_3.val(second_num);
    hidden_input_4.val(cost_calk.text());
    hidden_input_5.val(profit_calk.text());
});

$('.calc_btn_2').on('click', function () {
    third_num = third_output.text().replace(/\s+/g, '');
    four_num = four_output.text().replace(/\s+/g, '');
    hidden_input_1.val(check_box);
    hidden_input_2.val(third_num);
    hidden_input_3.val(four_num);
    hidden_input_4.val(cost_calk_2.text());
    hidden_input_5.val(profit_calk_2.text());
});

