Feature: Check how does menu works

#for autotest we need logout first
  Scenario: Logout

    Given open map page
    Then open menu
    And logout from menu

  Scenario: Login on site

    Given open map page
    Then open menu
    And sign in from menu
#
  Scenario Outline: open all links at menu

    Given open menu after login
    Then click on <menu_button>
#    And see <menu_button> page
    Then return at map page

    Examples:

    |menu_button|
    |    home   |
    |my bookings|
##    |    FAQ    |
#    |  support  |
    |  join us  |

  Scenario: Logout

    Given return at map page
    Then open menu
    And logout from menu
