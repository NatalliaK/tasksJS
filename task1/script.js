/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */

function getChange(cost, payment) {
  var piece = [];
  var change = payment - cost;
  var change6 = Math.floor(change);
  var smallChange = change * 100 - change6 * 100;
  var change1 = 0,
    change2 = 0,
    change3 = 0,
    change4 = 0,
    change5 = 0;

  while (smallChange > 0) {
    if (smallChange > 50) {
      change5 += 1;
      smallChange -= 50;
    } else if (20 <= smallChange && smallChange < 50) {
      change4 += 1;
      smallChange -= 20;
    } else if (10 <= smallChange && smallChange < 20) {
      change3 += 1;
      smallChange -= 10;
    } else if (5 <= smallChange && smallChange < 10) {
      change2 += 1;
      smallChange -= 5;
    } else if (1 <= smallChange && smallChange < 5) {
      change1 += 1;
      smallChange -= 1;
    }
  }
  piece.push(change1, change2, change3, change4, change5, change6);

  return piece;
}
