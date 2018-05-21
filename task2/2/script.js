function isBalanced(s) {
  var answer,
    index = [];

  if (typeof s === 'string') {
    s = s.split('');
  }

  addIndex(s);

  function addIndex(s) {
    for (let i = 0; i < s.length; i++) {
      if (
        (s[i].charCodeAt(0) === 123 &&
          s[i + 1] &&
          s[i + 1].charCodeAt(0) === 125) ||
        (s[i].charCodeAt(0) === 91 &&
          s[i + 1] &&
          s[i + 1].charCodeAt(0) === 93) ||
        (s[i].charCodeAt(0) === 40 && s[i + 1] && s[i + 1].charCodeAt(0) === 41)
      ) {
        index.push(i);
      }
    }
    if (index.length > 0) {
      index = index.reverse();

      for (let i = 0; i < index.length; i++) {
        s.splice(index[i], 2);
      }

      index.length = 0;
      addIndex(s);
    } else if (index.length === 0 && s.length !== 0) {
      answer = 'NO';
    } else {
      answer = 'YES';
    }
  }
  return answer;
}
