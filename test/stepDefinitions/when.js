
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

  // *** belongs to ta-loging  feature
  When(/^I login with username and password "([^"]*)" into the text box$/, function(arg1) {
    angeloCo.register(arg1);   
  });


});
