import React from 'react';
import { isMobileUA } from 'mdetect';
// console.log(require('modernizr'));

const __ISDEV__ = process.env.NODE_ENV === 'development';

const init = () => {
  if (__ISDEV__ && isMobileUA()) require('eruda').init();
};

init();
