Feature: Check calendar work from different place

  #  All test in map.js file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  Scenario: Check change date in Map page

    Given open map page
    Then open search field: "Lockport Avenue, Toronto, ON,"
    Then click Dates
    And see Dates modal window
    Then change data in Check in,out

  Scenario: Check calendar from list View all Location

    Given open map page
    Then click View all location and see this page default
    And click Dates from list page open modal window
    Then change data in Check In and Check Out

  Scenario: Check calendar from list View all Location Input Field

    Given open map page
    Then click View all location and see this page default
    And click Dates from list page open modal window Input field
    Then change data in Check In and Check Out Input field
