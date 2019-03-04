Feature: Register an accout to Angel.co

    As an existing user of  Angel.co
    I want to test my login credentials
    Because I want to check feature works only when credentials are correct

      Scenario: Sign in with valid credentials
        When I am on angel.co
        And  I am on Angellist homepage
        And  I go to Angellist login page
        And  I submit form
        Then I should be logged in

    # Scenario: Register an account using valid credentials
    #     When I am on angel.co
    #     And  I am on Angellist homepage
    #     And  I click the join button
    #     Then I should be on registration page

    # Scenario: Succesfully create an account
    #     When I am on registration page
    #     And  I complete rigistration form with a "@gmail.com" account
    #     Then I submit form
    #     # If captcha is activated due mulitple test runs the test will fail
    
    # Scenario: Succesfully log out and log back in with valid email
    #     When I am logged in and I click on logout
    #     And  I login with a "@gmail.com" account
    #     Then I should be logged in



    
