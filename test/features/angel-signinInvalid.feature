Feature: Test login failure feature of angel.co/login website

    As an non- existing user of Angel.co
    I enter invalid signin credentials
    Because I want to check feature works only when credentials are correct


    Scenario: I enter angel.co website
        Given I am on angel.co
    
    Scenario: Sign in with INVALID credentials
        When I go to Angellist login page
        And  I enter invalid credentials
        And  I submit form
        Then I should not be logged in
