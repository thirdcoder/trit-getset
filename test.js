'use strict';

var test = require('tape');

var n2bts = require('balanced-ternary').n2bts;
var bts2n = require('balanced-ternary').bts2n;

var ops = require('./');

var get_trit = ops.get_trit;
var clear_trit = ops.clear_trit;
var set_trit = ops.set_trit;
var trit_slice = ops.trit_slice;

test('get_trit', function(t) {
  t.equal(get_trit(6, 0), 0);
  t.equal(get_trit(6, 1), -1);
  t.equal(get_trit(6, 2), 1);
  t.end();
});

test('clear_trit', function(t) {
  t.equal(n2bts(clear_trit(bts2n('1i'),0)), '10');
  t.equal(n2bts(clear_trit(bts2n('1i'),1)),  'i');
  t.equal(n2bts(clear_trit(bts2n('iii'),0)), 'ii0');
  t.equal(n2bts(clear_trit(bts2n('iii'),1)), 'i0i');
  t.equal(n2bts(clear_trit(bts2n('iii'),2)),  'ii');
  t.end();
});

test('set_trit', function(t) {
  t.equal(n2bts(set_trit(bts2n('1i'), 0, 1)), '11');
  t.equal(n2bts(set_trit(bts2n('1i'), 0, 0)), '10');
  t.equal(n2bts(set_trit(bts2n('1i'), 0,-1)), '1i');
  t.equal(n2bts(set_trit(bts2n('1i'), 1, 0)),  'i');
  t.equal(n2bts(set_trit(bts2n('1i'), 1,-1)), 'ii');
  t.end();
});

test('trit_slice', function(t) {
  t.equal(trit_slice(bts2n('111000iii'), 0, 3), bts2n('iii'));
  t.equal(trit_slice(bts2n('111000iii'), 3, 6), bts2n('000'));
  t.equal(trit_slice(bts2n('111000iii'), 6, 9), bts2n('111'));
  t.end();
});

