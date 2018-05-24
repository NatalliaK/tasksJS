const textarea = document.querySelector('#textarea');
const button = document.querySelector('#button');

button.addEventListener('click', e => {
  var key = 1;
  var textareaVal = textarea.value;
  const FIRST_ENG_LETTER_UNICODE = 65;
  const LAST_ENG_LETTER_UNICODE = 122;
  const COMMA_UNICODE = 44;
  const POINT_UNICODE = 46;
  const MAX_VALUE = 255;

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
        return el === ' ' || (el >= FIRST_ENG_LETTER_UNICODE && el <= LAST_ENG_LETTER_UNICODE) || el === COMMA_UNICODE || el === POINT_UNICODE;
      })
      .map(el => {
				if (el !== ' ') {
					return String.fromCharCode(el);
				} else {
					return el;
				}
      });
    key++;
  } while (text.length !== textareaVal.length && key <= MAX_VALUE);

  var outputText = document.createElement('p');
  outputText.innerHTML = text.join('');
  document.querySelector('body').appendChild(outputText);
	textareaVal = '';
});
