Feature: Check discount in listing. Create discount, check create/delete function.

  #for autotest we need logout first
  Scenario: Logout

    Given open map page
    Then open menu
    And logout from menu

  Scenario: Login on site

    Given open map page
    Then open menu
    And sign in from menu

  Scenario: Check Edit listing

    Given open dashboard page
    And open dashboard menu
    Then click on listings
    And click Test Shop
    Then click Manage listing Test Shop
    And Discount
    Then add discount
    And delete discount

  Scenario: Logout

    Given open dashboard page
    And open dashboard menu
    Then logout from dashboard menu
