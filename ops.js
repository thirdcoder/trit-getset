'use strict';

var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;
var N_TO_BT_DIGIT = require('balanced-ternary').N_TO_BT_DIGIT;
var BT_DIGIT_TO_N = require('balanced-ternary').BT_DIGIT_TO_N;

// get trit value at ith index of n, i of 0=least significant
function get_trit(n,i) {
  // convert entire number to balanced ternary string then slice
  // would be nice to extract without converting everything, see extract_digit(), which
  // works for unbalanced ternary, but balanced converts 2 -> 1i, so individual digit extraction
  // is more difficult -- see https://en.wikipedia.org/wiki/Balanced_ternary#Conversion_from_ternary
  var s = n2bts(n);
  return ~~BT_DIGIT_TO_N[s.charAt(s.length - i - 1)];
}

// set ith trit (0=lst) of n to zero
function clear_trit(n,i) {
  var t0 = get_trit(n,i);
  var t_value = Math.pow(3,i) * t0;
  return n - t_value;
}

// set ith trit (0=lst) of n to trit t=-1, 0, or 1
function set_trit(n,i,t) {
  return clear_trit(n,i) + Math.pow(3,i) * t;
}

// extract trits of n from range a to b (0=lst)
function slice_trits(n,a,b) {
  var s = n2bts(n);
  var ss = s.substring(s.length - b, s.length - a);
  return bts2n(ss);
}
module.exports = {
  get_trit: get_trit,
  clear_trit: clear_trit,
  set_trit: set_trit,
  slice_trits: slice_trits
};
