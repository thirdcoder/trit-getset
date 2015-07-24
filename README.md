# trit-getset

Get and set trits (base 3 digits) of a signed integer

[![Build Status](https://travis-ci.org/thirdcoder/trit-getset.svg?branch=master)](https://travis-ci.org/thirdcoder/trit-getset)
[![npm version](https://badge.fury.io/js/trit-getset.svg)](https://www.npmjs.com/package/trit-getset)

Usage:

    var get_trit = require('trit-getset').get_trit;
    var clear_trit = require('trit-getset').clear_trit;
    var set_trit = require('trit-getset').set_trit;
    var slice_trits = require('trit-getset').slice_trits;

    get_trit(n,i);      // get value of ith trit of n (0=least significant)

    clear_trit(n,i);    // set ith trit to 0

    set_trit(n,i,t);    // set ith trit to t=-1, 0, or 1

    slice_trits(n,a,b); // extract trits of n from range a to b

[Trits](https://en.wikipedia.org/wiki/Trit) are a base 3 digits, analogous to
[bits](https://en.wikipedia.org/wiki/Bit) (for base 2). This module supports
balanced ternary (see also: [balanced-ternary](https://github.com/thirdcoder/balanced-ternary)).

All inputs (`n`) are signed integers. `i` and `a` or `b` indices are from the
least significant trit ([lst](https://github.com/thirdcoder/lst)) at 0.
See `test.js` for more examples.
