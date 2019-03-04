import {defineSupportCode } from 'cucumber';
import angelCo from '../pageobjects/home.page';

defineSupportCode(function({ Then }) {

  Then(/^I should be on registration page$/, function() {
    angelCo.signupPage();
  });

});
