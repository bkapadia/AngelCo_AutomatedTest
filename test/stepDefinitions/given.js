import { defineSupportCode } from 'cucumber';
import angelCo from '../pageobjects/home.page';
var Promise = require('bluebird');

defineSupportCode(function({ Given }) {

  Given(/^I am on angel.co$/, function() {
    angelCo.open();
  });
});

