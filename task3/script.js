Number.prototype.add = function(num) {
  return num + this;
};

Number.prototype.subtract = function(num) {
  return this - num;
};

Number.prototype.multiply = function(num) {
  return this * num;
};

Number.prototype.devide = function(num) {
  return this / num;
};

Number.prototype.square = function() {
  return Math.pow(this, 2);
};

function getSequenceOfSymbols(x) {
  var sequence = [];
  const length = x;
  var cycle = 1;
  var count = 1;

  setSymbol(cycle, count);

  function setSymbol(cycle, count) {
    for (count = 1; count <= cycle; count++) {
      if (count === 1) {
        sequence.push(1);
      }
      sequence.push(0);
    }

    if ((count - 1) * (cycle - 1) <= length) {
      cycle++;
      setSymbol(cycle, count);
    } else {
      sequence.length = length;
      return sequence;
    }
  }
  return sequence;
}

function promisify(func) {
  return function(x) {
    return new Promise((resolve, reject) => {
      func(x, function(error, result) {
        if (error !== null) {
          return reject(error);
        } else {
          return resolve(result);
        }
      });
    });
  };
}
