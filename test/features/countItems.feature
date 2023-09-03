Feature: Check count of items work from different places at website.

#  All test in map.js file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  Scenario: Change count of items from address field

    Given open map page
    Then click Dates
    And click Numbers of Item
    And change count of items from Dates
    Then see new count of items "3" change it to "1"

  Scenario: Change count of items from location in somewhere

    Given open map page
    Then click View all location and see this page default
    And click Dates at View all location and click count of items
    Then change count of items from View all location
    And see new count of items "2" change it to "1"

  Scenario: Check how works button "count of items"

    Given open map page
    Then click on button Count of items
    And see Count of items page
    Then check buttons + and -
    And press "Confirm" button
    Then see new count of items "2"
