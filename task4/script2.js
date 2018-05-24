var textarea = document.querySelector('#textarea');
var button = document.querySelector('#button');

button.addEventListener('click', e => {
  var key = 1;
  var textareaVal = textarea.value;
  var text;

  do {
    text = textareaVal
      .split('')
      .map(el => {
        if (el !== ' ') {
          return el.charCodeAt(0) ^ key;
        } else {
          return el;
        }
      })
      .filter(el => {
        return el === ' ' || (el >= 65 && el <= 122) || el === 44 || el === 46;
      })
      .map(el => {
        return String.fromCharCode(el);
      });
    key++;
  } while (text.length !== textareaVal.length && key < 256);

  console.log(text.join(''));
  var outputText = document.createElement('p');
  outputText.innerHTML = text.join('');
  document.querySelector('body').appendChild(outputText);
  textareaVal = '';
});
