
import { defineSupportCode } from 'cucumber';
import angeloCo from '../pageobjects/home.page';

module.exports = new Promise(function(resolve, reject) {
  // async code here;
defineSupportCode(function({ When }) {

  When(/I am on Angellist homepage/, function() {
    angeloCo.homepage();
  });

  When(/^I click the join button$/, function() {
    angeloCo.join();
  });

  When(/^I am on registration page$/, function() {
    angeloCo.signupPage();
  });

  When(/^I complete rigistration form with a "([^"]*)" account/, function(arg1) {
    angeloCo.register(arg1);
  });

  When(/^I login with username and password "([^"]*)" into the text box$/, function(arg1) {
    angeloCo.register(arg1);   
  });

  When(/^I am logged in and I click on logout$/, function(arg1) {
    angeloCo.logout();   
  });

  When(/^I login with a "([^"]*)" account$/, function(arg1) {
    angeloCo.signinValid(arg1);   
  });

  When('I go to Angellist login page', function(callback) {
    this.browser
    .click("auth.login")
    .getTitle().should.equal('Log In - AngelList').catch (function(err){
      console.log(err)
    })
  })
  
  // When(/^I go to Angellist login page$/, function(arg1) {
  //   angeloCo.login();   
  // });

  When(/^I enter existing valid credentials$/, function(arg1) {
    angeloCo.signinExisting();   
  });
  
  
});

});
