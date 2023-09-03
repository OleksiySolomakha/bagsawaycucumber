Feature: Check dashboard page, booking, listing. Check manage listings

#for autotest we need logout first
  Scenario: Logout

    Given open map page
    Then open menu
    And logout from menu

  Scenario: Login on site

    Given open map page
    Then open menu
    And sign in from menu

#  Scenario Outline: open all links at menu
#
#    Given open dashboard page
#    And open dashboard menu
#    Then click on <menu_dash>
#    And see <menu_dash> page
#    Then click back dashboard button
#
#    Examples:
#    | menu_dash |
#    | bookings  |
#    | listings  |
##    | payouts   |
##    | promote   |
##    | support dash  |

#  Scenario: Check Edit listing
#
#    Given open dashboard page
#    And open dashboard menu
#    And click on listings
#    Then click Manage listing Test Shop
#    Then work with Edit listing

#  Scenario: Check Edit listing
#
#    Given open dashboard page
#    And open dashboard menu
#    And click on listings
#    Then click Manage listing Test Shop

  Scenario: Check Edit listing

    Given open dashboard page
    And open dashboard menu
    Then click on listings
    And click Test Shop
    Then click Manage listing Test Shop
    And with Regular hours
    Then click back listing button
    Then Holiday
    Then click back listing button
    And Discount

  Scenario: Logout

    Given open dashboard page
    And open dashboard menu
    Then logout from dashboard menu

