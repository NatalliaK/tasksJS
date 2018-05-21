'use strict';

/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */
mocha.setup('bdd');
var assert = chai.assert;

describe('Number.prototype.add', function() {
  it('функция', function() {
    assert.isOk(typeof Number.prototype.add === 'function');
  });
  it('возвращает правильное значение', function() {
    assert.isOk((4).add(5) === 9);
  });
  it('цепочка вызовов возвращает правильное значение', function() {
    assert.isOk(
      (2)
        .add(3)
        .add(4)
        .add(5) === 14
    );
    assert.isOk(
      (2)
        .add(3)
        .devide(2)
        .add(4)
        .multiply(2) === 13
    );
  });
});

describe('Number.prototype.subtract', function() {
  it('функция', function() {
    assert.isOk(typeof Number.prototype.subtract === 'function');
  });
  it('возвращает правильное значение', function() {
    assert.isOk((3).subtract(2) === 1);
    assert.isOk((4).subtract(5) === -1);
  });
  it('цепочка вызовов возвращает правильное значение', function() {
    assert.isOk(
      (8)
        .subtract(3)
        .subtract(2)
        .subtract(2) === 1
    );
    assert.isOk(
      (7)
        .subtract(4)
        .add(3)
        .devide(2)
        .subtract(2) === 1
    );
  });
});

describe('Number.prototype.multiply', function() {
  it('функция', function() {
    assert.isOk(typeof Number.prototype.multiply === 'function');
  });
  it('возвращает правильное значение', function() {
    assert.isOk((3).multiply(2) === 6);
    assert.isOk((4).multiply(5) === 20);
  });
  it('цепочка вызовов возвращает правильное значение', function() {
    assert.isOk(
      (2)
        .multiply(3)
        .multiply(2)
        .multiply(2) === 24
    );
    assert.isOk(
      (3)
        .multiply(4)
        .add(3)
        .devide(2)
        .multiply(2) === 15
    );
  });
});

describe('Number.prototype.devide', function() {
  it('функция', function() {
    assert.isOk(typeof Number.prototype.devide === 'function');
  });
  it('возвращает правильное значение', function() {
    assert.isOk((6).devide(2) === 3);
    assert.isOk((40).devide(5) === 8);
  });
  it('цепочка вызовов возвращает правильное значение', function() {
    assert.isOk(
      (60)
        .devide(3)
        .devide(2)
        .devide(2) === 5
    );
    assert.isOk(
      (16)
        .devide(4)
        .square()
        .add(3)
        .devide(2) === 9.5
    );
  });
});

describe('Number.prototype.square', function() {
  it('функция', function() {
    assert.isOk(typeof Number.prototype.square === 'function');
  });
  it('возвращает правильное значение', function() {
    assert.isOk((6).square() === 36);
    assert.isOk((4).square() === 16);
  });
  it('цепочка вызовов возвращает правильное значение', function() {
    assert.isOk(
      (2)
        .square()
        .square()
        .square() === 256
    );
    assert.isOk(
      (4)
        .square()
        .square()
        .add(4)
        .devide(2) === 130
    );
  });
});

describe('getSequenceOfSymbols', function() {
  it('функция', function() {
    assert.isOk(typeof getSequenceOfSymbols === 'function');
  });
  it('принимает 1 параметр', function() {
    assert.isOk(getSequenceOfSymbols.length === 1);
  });
  it('возвращает массив значений заданной длины', function() {
    assert.isOk(getSequenceOfSymbols(10).length === 10);
  });
  it('в массиве возвращается правильная последовательность символов', function() {
    assert.isOk(getSequenceOfSymbols(8).join('') === '10100100');
    assert.isOk(getSequenceOfSymbols(20).join('') === '10100100010000100000');
  });
});

describe('promisify', function() {
  function randomDelay(x, cb) {
    var delay = x * Math.random() * 1000;
    setTimeout(function() {
      var now = Date.now();
      var isError = now % 2 === 0;
      if (isError) {
        cb({ message: 'Ooops!', now: now });
      } else {
        cb(null, { message: 'Hola!', now: now, winner: ' You' });
      }
    }, delay);
  }

  it('функция', function() {
    assert.isOk(typeof promisify === 'function');
  });
  it('первый принимаемый аргумент - функция', function() {
    assert.isOk(typeof promisify(randomDelay) === 'function');
  });
  it('возвращает объект', function() {
    assert.isOk(typeof promisify(randomDelay)(55) === 'object');
  });
  it('возвращает 1 значение', function() {
    promisify(randomDelay)(56)
      .then(
        result =>
          assert.isOk(result.message + result.winner + ' win') ===
          'Hola! You win'
      )
      .catch(error => assert.isOk(error.message) === 'Ooops!');
  });
});
