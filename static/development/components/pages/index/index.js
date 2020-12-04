import './index.scss';

$('.btn_consultation').on('click', function () {
  $.fancybox.open({
    src: '#form_consultation',
    touch: false
  });
});
