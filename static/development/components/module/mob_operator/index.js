import './index.scss'

// Функція для перебору операторів в інпуті phone

// Щоб підключити її, в файлі з валідацією прописати - 
// import {check_operator} from './../mob_operator/index';




export function check_operator(all_code) {
  let array_numbers = all_code;
  let lang_site;
  let operator_object = {};
  let curr_text;
  lang_site = location_lenquage();
  switch (lang_site) {
      case 'uk':
      curr_text = "ведіть дійсний код оператора";
      break;
      case 'ru':
      curr_text = 'ведите действительный код оператора';
      break;
      case 'en':
      curr_text = 'enter a valid operator code';
      break;
      default:
      curr_text = "ведіть дійсний код оператора";
  }
  

  let all_operators = '/|\\+38\\(0'
  all_operators += array_numbers.join('|\\+38\\(0');
  all_operators += '|/';
  var patt = new RegExp(all_operators);
  console.log('patt: ', patt);

  jQuery.validator.addMethod("operator", function(value, element) {
    return this.optional(element) || patt.test(value);
  }, curr_text); 
  operator_object.curr_text = curr_text;

  function location_lenquage() {
    return location.pathname.split('/')[1];
  }

  return operator_object;
}  // без ; в конце