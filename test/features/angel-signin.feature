Feature: Test login feature of angel.co/login website is successful

    As an existing user of  Angel.co
    I want to test my login credentials
    Because I want to check feature works only when credentials are correct


    Scenario: I enter angel.co website
        Given I am on angel.co
    
    Scenario: Sign in with VALID credentials
        When I go to Angellist login page
        And  I enter existing valid credentials
        And  I submit form
        Then I should be logged in
