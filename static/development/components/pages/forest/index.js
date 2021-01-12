import './index.scss';

$('.about_forest_navigate_item').on('click', function () {
    let video = document.getElementById('about_forest_video');
    let currTime = $(this).attr('data-time');
    video.currentTime = Number(currTime);
    $('.about_forest_navigate_item').removeClass('active');
    $(this).addClass('active');
    change_navigate();
});

function change_navigate() {
    let all_items = $('.about_forest_navigate_item');
    let active_index = $('.about_forest_navigate_item.active').index();

    all_items.map((index, item) => {
        if (index < active_index) {
            $(item).addClass('done');
        } else {
            $(item).removeClass('done');
        }
    });
}

setInterval(() => {
    check_video_timeline();
}, 1000);

function check_video_timeline() {
    let video = document.getElementById('about_forest_video');
    let all_items = $('.about_forest_navigate_item');
    let curr_time = video.currentTime;

    all_items.map((index, item) => {
        let item_time = Number($(item).attr('data-time'));
        if (curr_time >= item_time) {
            $('.about_forest_navigate_item').removeClass('active');
            $(item).addClass('active');
            change_navigate();
            return false;
        }
    });

}

$('.about_forest_settings').on('click', function () {
    $('.about_forest_navigate__block').toggleClass('active');
})