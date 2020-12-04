// підгружає стилі 
import './index.scss'
// імортує валідацію для номерів оператора
// import {check_operator} from '../mob_operator/index';

// до класу додає маску для телефону
$('input[type="tel"]').mask("+38(099) 999 9999");
// створюється масив з усіма операторами
// let array_oper_number = [39, 50, 63, 66, 67, 68, 73, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 44];

// змінна для помилки, яку потрібно вивести при неправильному введені оператора
// let array_error = check_operator(array_oper_number);

// загальна функція яка загружається при загрузці сторінки
$(function() {
  // до цього класу додається валідація яка забороняє вводити цифри
  $('.txtNumeric').keydown(function (e) {
    if (e.ctrlKey || e.altKey) {
    e.preventDefault();
      
    } else {
    
      var key = e.keyCode;
      
      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
      
        e.preventDefault();
        
      }

    }
    
  });
  $('.txtWords').keydown(function (e) {
    if (e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      var key = e.keyCode;
      if (((key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
      }
    }
  });
});

// загальна функція яка загружається при загрузці сторінки
$(function () {
  Onload();
})

// в цю функцію заганяються форми які мають проходити валідацію
function Onload() {
  valide_form('.form__block', '.input', true);
  valide_form('.form_consultation', '.input', true);
}
// вертає конкретну мову, яка стоїть зараз на сайті
function location_leng() {
  return location.pathname.split('/')[1];
}
// основна функція, яка валідує потрібну форму
function valide_form(id_form, append_error_box, check_request) {
  var check_request = check_request;
  if ($(id_form).length > 0) {

    var lang_site;
    var errore_text = {};

    lang_site = location_leng();
    // перевіряє мову сайту, і вертає потрібний переклад
    switch (lang_site) {
      case 'uk':
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.min_pass = 'Пароль занадто короткий';
        break;
      case 'ru':
        errore_text.required = 'Поле обязательно для заполнения';
        errore_text.email = 'Поле должно содержать email';
        errore_text.min_pass = 'Пароль слишком краток';

        break;
      case 'en':
        errore_text.required = 'The field is required';
        errore_text.email = 'The field must contain an email';
        errore_text.min_pass = 'Password is too short';

        break;
      default:
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.min_pass = 'Пароль занадто короткий';


    }

    // кастомний метод, який проводить валідацію на довжину паролю
    jQuery.validator.addMethod("integer", function(value, element) {
      if (value.length < 6) {
        return false;
      } else {
        return true;
      }
    }, errore_text.min_pass);

    


    // функція самого плагіну
    $(id_form).validate({
      errorPlacement: function (event, validator) {

        $(validator).parents(append_error_box).append($(event));
        $(validator).parents(append_error_box).addClass('is-error')
      },
      rules: {
        name: {
          required: true,
          // integer: true,
          // operator: true,
        },
       
        message: {
          required: true,
        },

        phone: {
          required: true,
        },
       
      },
      
      messages: {
        name: {
          required: errore_text.required,

          // email: errore_text.email,
          // operator: array_error.curr_text,
        },
      
        message: {
          required: errore_text.required,
        },

        phone: {
          required: errore_text.required,
        },
       
      },

      submitHandler: function(form) {
             
        event.preventDefault();
         $('.load_spin').addClass('load_spin_active');


         let Formdata = new FormData();
         var form_input = $(form).serializeArray();
         var url_form = form.action;
         var form_json = {};
         $(form_input).each(function(index, obj) {
            form_json[obj.name] = obj.value;
         });

           let user_files = form.querySelectorAll('#input_user_file')[0];

           if (user_files != undefined) {
             if (user_files.files[0] !== undefined) { 
                 $.each(user_files.files, function(index, value) {
                   Formdata.append('file', value);
                 });
             }
           }
         
           Formdata.append('data', JSON.stringify(form_json));
         
          if(url_form != ''){
           
            fetch(url_form, {
              method: 'POST',
              body: Formdata,
            })
            .then(data => {
              return data.json();
            })
            .then(data => {

              if(data.status=='OK' && typeof data['status'] !== "undefined"){
                  sayHi();
              } else {
              // if(data.status=='BAD' && typeof data['status'] !== "undefined"){
                  $('.load_spin').removeClass('load_spin_active');
                  $.fancybox.open({
                    src: '#modal-form_true',
                  });
                  $('.form_true_img').css('display', 'none');
                  $('.usually_modal_text').text('Вибачте, сталась помилка. Спробуйте пізніше.');
                  setTimeout(() => {
                    $.fancybox.close();
                    $.fancybox.close({
                      src: '#modal-form_true',
                    });
                    $('.form_true_img').css('display', 'inline-block');
                    $('.usually_modal_text').text('Дякуємо, заявка опрацьована. Наші менеджери звяжуться з Вами');
                  }, 1500);
              }
  
              if(typeof data['url'] !== "undefined" && data.url!=''){
                //   sayHi();
                  location.href=data.url;
              }
            
  
  
            })
  
          }else {
            console.log("forn_not_actions");
          }
  
     
        function explode(){
          if (id_form == '#modal-form_user') {
            // window.location.pathname = '/'
          } else {
            // sayHi();
          }
           
          }
          explode()
        function sayHi() {
            $('.load_spin').removeClass('load_spin_active');
            if (check_request === true) {
              $.fancybox.open({
                src: '#modal-form_true',
              });
              setTimeout(() => {
                $.fancybox.close();
                $.fancybox.close({
                  src: '#modal-form_true',
                });
              }, 1500);
                var form_inputs = $(form)[0].querySelectorAll('input');
                if (form_inputs.length > 0) {
                    for (var key in form_inputs) {
                        if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                            if (form_inputs[key].type == 'hidden') {
                              
                            } else if (form_inputs[key].type !== 'submit') {
                              form_inputs[key].value = '';
                            }
                            
                        }
                    }
                    var form_textaria = $(form)[0].querySelectorAll('textarea');
                    if (form_textaria.length > 0) {
                        form_textaria[0].value = '';
                    }
                }
            }
        }
       
     }
    
    });
  }

}

