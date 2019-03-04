import {defineSupportCode } from 'cucumber';
import angelCo from '../pageobjects/home.page';

module.exports = new Promise(function(resolve, reject) {
  // async code here;

defineSupportCode(function({ Then }) {

  Then(/^I should be on registration page$/, function() {
    angelCo.signupPage();
  });

  Then(/^I submit form$/, function() {
    angelCo.submit();
  });

  Then(/^I submit verification if possible$/, function() {
    angelCo.submit();
  });

  Then(/^I should be logged in$/, function() {
    angelCo.loginVerify();
  });
  
});
});
