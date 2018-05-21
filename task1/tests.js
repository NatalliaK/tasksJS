'use strict';

/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */

mocha.setup('bdd');
var assert = chai.assert;

describe('getChange', function() {
  it('это функция', function() {
    return assert.isOk(typeof getChange === 'function');
  });
  it('принимает 2 аргумента', function() {
    return assert.isOk(getChange.length === 2);
  });
  it('первый аргумент (стоимость) не больше или равен второму (оплата)', function() {
    var result = arguments[0] > arguments[1];
    return assert.isOk(!result === true);
  });
  it('возвращает массив', function() {
    return Array.isArray(getChange(1, 1)) === true;
  });
  it('возвращает массив с 6 элементами', function() {
    return assert.isOk(getChange(1, 1).length === 6);
  });
  it('при стоимости товара 1 руб и оплате 1 руб вернется массив, в котором вся сдача равна 0 ([0, 0, 0, 0, 0, 0])', function() {
    assert.equal(getChange(1, 1).join(), [0, 0, 0, 0, 0, 0].join());
  });
  it('при стоимости товара 1 руб и оплате 5 руб вернется массив, в котором  сдача равна 4 рубля ([0, 0, 0, 0, 0, 4])', function() {
    assert.equal(getChange(1, 5).join(), [0, 0, 0, 0, 0, 4].join());
  });
  it('при стоимости товара 3 руб 67 коп и оплате 10 руб вернется массив, в котором  сдача равна [3, 0, 1, 1, 0, 6]', function() {
    assert.equal(getChange(3.67, 10).join(), [3, 0, 1, 1, 0, 6].join());
  });
});
