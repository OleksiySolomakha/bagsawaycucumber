Feature: Check price at map page and Listing page, they must match.

  Scenario: Check price with default date

    Given open map page
    Then write location in search field: "Toronto,"
    Then click at first location and check it

  Scenario: Check price with custom date

    Given open map page
    Then write location in search field: "Toronto,"
    Then click Dates
    And see Dates modal window
    Then change data in Check in,out
    And close Dates modal window
    Then click at second location and check it
