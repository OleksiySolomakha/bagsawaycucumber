Feature: Check elements at booking page. Check booking Cancel.

  Scenario: Check cancel booking from dashboard

    Given open map page
    Then open search field: "Lockport Avenue, Toronto, ON,"
    Then choose needful location and book there
    Then login with wrong parameters
    Then login for booking
    And book in this place
    Then cancel booking in Dashboard
    And return at map page
    Then open menu
    And logout from menu

  Scenario: Cancel booking after book

    Given open map page
    Then open search field: "Lockport Avenue, Toronto, ON,"
    Then choose needful location and book there
    Then login with wrong parameters
    Then login for booking
    Then cancel booking after book
    And return at map page
    Then open menu
    And logout from menu
