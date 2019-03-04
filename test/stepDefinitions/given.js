import { defineSupportCode } from 'cucumber';
import angelCo from '../pageobjects/home.page';

defineSupportCode(function({ Given }) {

  Given(/^I am on angel.co homepage$/, function() {
    angelCo.open();
  });

});
