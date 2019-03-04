Feature: Test forgot password feature

    As an existing user of Angel.co
    I want to test if password reset works
    Because I should be able to reset password for existing users


    Scenario: Go to homepage
        Given I am on angel.co

    Scenario: Forgot password sucessful
        When I go to Angellist login page
        And  I select forgot password
        And  I enter valid email
        And  I submit form
        Then I see that reset was successful