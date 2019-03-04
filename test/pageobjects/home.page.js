
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
    }
  }

  join(){
    Page.clickWhenVisible("//a['.Join']");
  }

  signupPage(){
    browser.waitForVisible(".login_wrapper")
      if(!browser.isVisible(".login_wrapper")){
        browser.click("//a['.Join']");
      }
    browser.getTitle().should.equal('Sign up - AngelList');
  }

  register(arg1){
    var blocker = "!!!!!This can not be tested due to captcha block!!!!" //THIS IS A BLOCKER IF SITE HAS INITIATED CAPTCHA 
    browser.setValue("#user_name",user1 +' '+ user1);
    browser.setValue("#user_email",user1+arg1);
    browser.setValue("#user_password","password"+user1);
    if (browser.isVisible(".g-recaptcha")){
      console.log(blocker);
    }
  }

  submit(){
    browser.click("//input[@type='submit']");
  }

  validRegister(){
    browser.getText(".top_title").should.equal(`Welcome to AngelList, ${user1}!`);
  }
  logout(){
    browser.pause(2000);// will wait indefinitely if "if" statement has "waitForVisible" so need to use pause instead
    if (browser.isVisible(".logout-link")){
    Page.clickWhenVisible(".logout-link");
    }
  }

  login(){
    if(browser.isVisible(".cookie-consent-banner")){
      browser.click(".c-button.js-accept");
    }
    browser.pause(2000);//time to open browser
    Page.clickWhenVisible(".auth.login");
    //browser.url('https://angel.co/login');
    browser.pause(2000); //time to load page
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

  loginVerify(){
    browser.pause(1000); //need pause for expect statement else it wait indefinitely with the "waitForVisible" method
    expect(browser.isVisible(".logout-link")).to.be.true;

  }

  loginUnableVerify(){
    browser.pause(1000); //need pause for assertion for expect method
    expect(browser.isVisible(".logout-link")).to.be.false;
  }

  forgotPassword(){
    Page.clickWhenVisible(".js-forgot_password");
  }

  validEmailReset(){
    browser.setValue("#user_email", "koho@koho.com");
  }

  inValidEmailReset(){
    browser.setValue("#user_email",user1+"@bademailtest.com");
  }

  resetFailure(){
    browser.pause(2000); //need pause for assertion for expect method
    expect(browser.isVisible(".validation-error")).to.be.true;
  }

  resetSuccess(){
    browser.pause(2000); //need pause for assertion for expect method
    expect(browser.isVisible(".validation-error")).to.be.false;
  }
}

export default new angelCo();
