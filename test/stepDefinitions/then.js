import {defineSupportCode } from 'cucumber';
import angelCo from '../pageobjects/home.page';

defineSupportCode(function({ Then }) {

  Then(/^I should be on registration page$/, function() {
    angelCo.signupPage();
  });

  Then(/^I submit form$/, function() {
    angelCo.submit();
  });

  Then(/^I should be logged in$/, function() {
    angelCo.loginVerify();
  });

  Then(/^I should not be logged in$/, function() {
    angelCo.loginUnableVerify();
  });

  Then(/^I see that reset was successful$/, function() {
    angelCo.resetSuccess();
  });

  Then(/^I see that reset was unsuccessful$/, function() {
    angelCo.resetFailure();
  });

  Then(/^I should see that I am registered$/, function() {
    angelCo.validRegister()();
  });
  
});
