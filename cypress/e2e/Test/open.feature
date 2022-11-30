Feature: Open webpage

  Scenario: Open web page
    Given I open Quix
    And I log in
    And I open my workspace
    And I navigate to the Library
    Then I should be on the Library page