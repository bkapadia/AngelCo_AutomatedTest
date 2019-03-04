
import Page from './page';

const user1 = Page.randomValue();

class angelCo extends Page  {
  open () {
      super.open('https:/angel.co/');
  }
  
  homepage(){
    browser.pause(1000); //allow time to load page
    if(browser.isVisible(".cookie-consent-banner")){
      browser.click(".c-button.js-accept");
      browser.pause(1000);
      browser.click("//a['.Join']");
    }
    browser.waitForVisible(".header_nav");
    browser.getTitle().should.equal('AngelList - Where the world meets startups');
  }

  join(){
    browser.click("//a['.Join']");
  }

  signupPage(){
    browser.waitForVisible(".login_wrapper")
      if(!browser.isVisible(".login_wrapper")){
        browser.click("//a['.Join']");
      }
    browser.getTitle().should.equal('Sign up - AngelList');
  }

  register(arg1){
    var blocker = "!!!!!This can not be tested due to captcha block!!!!"
    browser.setValue("#user_name",user1 +' '+ user1);
    browser.setValue("#user_email",user1+arg1);
    browser.setValue("#user_password","password"+user1);
    if (browser.isVisible(".g-recaptcha")){
      console.log(blocker);
    }
  }

  submit(){
    browser.click("//input[@type='submit']");
    browser.getText(".top_title").should.equal(`Welcome to AngelList, ${user1}!`);
  }

  signout(){
    browser.pause(2000);
    if (browser.isVisible(".logout-link")){
    Page.clickWhenVisible(".logout-link");
    }

  }

  login(){
    browser.click("auth.login");
    //Page.clickWhenVisible(".auth.login").then();
    browser.getTitle().should.equal('Log In - AngelList');
  }

  signinInValid(arg1){
    browser.waitForVisible(".s-grid0.login_wrapper");
    browser.setValue("#user_email",user1+arg1);
    browser.setValue("#user_password","password");
  }

  signinValid(arg1){
    browser.waitForVisible(".s-grid0.login_wrapper");
    browser.setValue("#user_email",user1+arg1);
    browser.setValue("#user_password","password"+user1);
  }

  signinExisting(){
    browser.waitForVisible(".s-grid0.login_wrapper");
    browser.setValue("#user_email", "koho@koho.com");
    browser.setValue("#user_password","koho_bhavin");
  }
  
  submitLogin(){
    Page.clickWhenVisible("//input[@type='submit']");
  }
}

export default new angelCo();
