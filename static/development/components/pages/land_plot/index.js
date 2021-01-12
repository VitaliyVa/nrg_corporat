import './check_box.scss';
import './index.scss';


$('.side_menu_svg').on('click', function () {
    $('.side_menu').toggleClass('active');
})

create_slider('slider_price');
create_slider('slider_size');

function create_slider(slider_id) {
    let slider = document.getElementById(slider_id);
    let wrapper = $(slider).parents('.range_input__block');
    let type = $(wrapper).find('.range_input_min').attr('data-type')
    let min = Number($(wrapper).find('.range_input_min').attr('data-value'));
    let max = Number($(wrapper).find('.range_input_max').attr('data-value'));
    noUiSlider.create(slider, {
        start: [(max + min) / 2],
        connect: [true, false],
        range: {
            'min': Math.round(min),
            'max': Math.round(max)
        },
        tooltips: false,
    });


    let val_floor;
    slider.noUiSlider.on('update', function (values) {
        val_floor = Math.floor(values[0]);
        $(wrapper).find('.value_item').text(`- ${val_floor} ${type}`);
        // $('.sum_works').text(val_floor1);

    });

}
