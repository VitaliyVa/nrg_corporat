import './index.scss';
 
$(".btn_standart_transparent").hover(
    function () {
        $(this).removeClass('out').addClass('over');
    },
    function () {
        $(this).removeClass('over').addClass('out');
    }
  );



  [...$('.size_js')].map(item=>{ 
    const current_width = $(item)[0].offsetWidth;
    console.log(current_width);
    $(item).css('width', `${current_width}px`);
  });



  $('.link_for_form').on('click', function() {
      let href = $(this).attr('data-href');
      let name = $(this).attr('data-name');
      localStorage.setItem('name_for_form', name);
      window.location.href = href;
  });