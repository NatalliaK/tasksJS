//заглавные и строчные буквы английского алфавита + пробелы

const textarea = document.querySelector('#textarea');
const password = document.querySelector('#password');
const button = document.querySelector('#button');
const MAX_VALUE = 255;
button.addEventListener('click', e => {
  var key;

  if (
    typeof +password.value === 'number' &&
    password.value > 0 &&
    password.value <= MAX_VALUE
  ) {
    key = password.value;
  } else if (password.value.length === 1) {
    key = password.value.charCodeAt(0);
  } else {
    document.querySelector('span').innerText = 'Вы ввели неправильное значение';
    password.value = '';
    return;
  }

  var encodedText = textarea.value.split('').map(el => {
    if (el !== ' ') {
      return String.fromCharCode(el.charCodeAt(0) ^ key);
    } else {
      return el;
    }
  });

  var t = document.createElement('p');
  t.innerHTML = encodedText.join('');
  document.querySelector('body').appendChild(t);
  textarea.value = '';
  password.value = '';
});
