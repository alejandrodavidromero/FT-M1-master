'use strict';

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function BinarioADecimal(num) {
  num = num.split("").reverse;
  for (let i = 0; i < num.length; i++) {
    result = result + Math.pow(2, i) * parseInt(num[i]);
  }
  return result;
}

function DecimalABinario(num) {
  while (num > 0) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }
  return result.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};