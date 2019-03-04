
import { defineSupportCode } from 'cucumber';
import angeloCo from '../pageobjects/home.page';

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
  
  When(/^I select forgot password$/, function() {
    angeloCo.forgotPassword();   
  });


  When(/^I am logged in and I click on logout$/, function() {
    angeloCo.logout();   
  });

  When(/^I login with a "([^"]*)" account$/, function(arg1) {
    angeloCo.signinValid(arg1);   
  });

  When(/^I enter invalid credentials$/, function() {
    angeloCo.signinInValid();   
  });

  When(/^I go to Angellist login page$/, function() {
    angeloCo.login();   
  });

  When(/^I enter existing valid credentials$/, function() {
    angeloCo.signinExisting();   
  });
  

  When(/^I enter valid email$/, function() {
    angeloCo.validEmailReset(); 
  });

  When(/^I enter invalid email$/, function() {
    angeloCo.inValidEmailReset(); 
  });
  



  
});
