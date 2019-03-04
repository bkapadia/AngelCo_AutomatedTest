Feature: Test forgot password feature is sucessful

    As an non-existing user of Angel.co
    I want to test if password reset does not works
    Because I should not be able to reset password for non-existing users


    Scenario: Go to homepage
        Given I am on angel.co

    Scenario: Forgot password unsucessful
        When I go to Angellist login page
        And  I select forgot password
        And  I enter invalid email
        And  I submit form
        Then I see that reset was unsuccessful
