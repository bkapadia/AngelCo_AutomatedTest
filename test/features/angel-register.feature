Feature: Register an accout to Angel.co
# THIS TEST WILL FAIL IF angel.co DETECTS THAT IT'S AN AUTOMATED TEST
# AFTER SEVERAL RUNS CATPCHA MIGHT BE INITIATED TO BLOCK REGISTRATION

    As a new user of Angel.co
    I want to test registration
    Because I want to check if feature works only when credentials are correct

      Scenario: Go to homepage
        Given I am on angel.co

    Scenario: Register an account using valid credentials
        When I am on Angellist homepage
        And  I click the join button
        Then I should be on registration page

    Scenario: Succesfully create an account
        When I am on registration page
        And  I complete rigistration form with a "@gmail.com" account
        And  I submit form
        Then I should see that I am registered
        # If captcha is activated due mulitple test runs the test will fail
    
    Scenario: Succesfully log out and log back in with valid email
        When I am logged in and I click on logout
        And  I login with a "@gmail.com" account
        Then I should be logged in