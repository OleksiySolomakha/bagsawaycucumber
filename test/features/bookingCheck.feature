Feature: Check elements at booking page. Check booking process for new users.
  Check validation for credit cards.

  Scenario: Check booking page login and book there

    Given open map page
    Then open search field: "Lockport Avenue, Toronto, ON,"
    Then choose needful location and book there
    Then login with wrong parameters
    Then login for booking
    And book in this place
    Then return at map page
    Then open menu
    And logout from menu

  Scenario: Check change booking after book

    Given open map page
    Then open search field: "Lockport Avenue, Toronto, ON,"
    Then choose needful location and book there
    Then login with wrong parameters
    Then login for booking
    And change booking after book this place
    Then return at map page
    Then open menu
    And logout from menu

  Scenario: Invalid credit card

    Given open map page
    Then open search field: "Lockport Avenue, Toronto, ON,"
    Then choose needful location and book there
    Then login with wrong parameters
    Then login for booking
    And try book with invalid card see error card message


