Feature: Check how does search work and find locations for booking

  Scenario: start from map page and check search form

    Given open map page
    Then open search field and write: "New York,"
    And see map page
    Then start work with it, click on 2 locations one by one

  Scenario: Check message for access to your location

    Given open map page
    Then click GPS button
    And see Kiev(my location)

  Scenario: Check all locations in chosen city

    Given open map page
    Then open search field and write: "New York,"
    And see map page
    Then click View all location and see this page
    Then move on by pages
    And choose some location from listing

#   Chatbox doesn't work now!!!!!!!!!!!!!!!!!!
#  Scenario: Check message box from map page
#
#    Given open map page
#    Then click on chat box at map page
#    And see chat box


#    +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    #  When we create normal start from home page
#  Scenario: Login on site
#
#    Given open bagsaway login page and check all elements on the page
#    Then write email in Bags field
#    And write password in Bags field
#    And press button Login and see main page Bags

#  Scenario: Move to Map page and start clicking on some locations on it, just test how it works
#
#    Given write in search field: "New York, NY, U"
#    Then click "SEARCH" at main page
#    And see Map page
#    Then start work with it, click on 2 locations one by one
#    Then return to main page
#
#  Scenario: Check message for access to your location
#
#    Given write in search field: "New York, NY, U"
#    Then click "SEARCH" at main page
#    And see Map page
#    Then click GPS button

##    I don't understand why message doesn't shows, we move to our location without message
##    And see allowed access message

#    And see Kiev(my location)
#    Then return to main page

#  Scenario: Check how works button "count of items"
#
#    Given write in search field: "New York, NY, U"
#    Then click "SEARCH" at main page
#    And see Map page
#    Then click on button Count of items
#    And see Count of items page
#    Then check buttons + and -
#    And press "Confirm" button
#    Then see new count of items "2"
##    And return to main page

#    We will use it when make normal Home page!!!!!!!!!!!!!!!!!!!!!!

#  Scenario: Check change date in Map page
#
#    Given write in search field: "New York, NY, U"
#    Then click "SEARCH" at main page
#    And see Map page
#
##    If you change date once  button "Now" will gave name "Dates"
#
#    Then click Dates
#    And see Dates modal window
#    Then change data in Check In section and check new data
#    Then change data in Check Out section and check new data


#   Before creating normal page  We don't use it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
#    And return to main page
#
#    We use it now
#  Scenario: Check search field at Map page
#
#    Given click "SEARCH" at main page
#    Then click at search field and write: "Toronto, ON, Cana"
#    And see Toronto page
#    Then click search
#    And then click back from search page
#    And return to main page
#
#  Scenario: Check all locations in chosen city
#
#    Given write in search field: "New York, NY, U"
#    Then click "SEARCH" at main page
#    And see Map page
#    Then click View all location and see this page
#    Then move on by pages
#    And choose some location
#    Then see Complete your booking page
#    And complete booking
#    And return to main page

#  Before creating normal page  We don't use it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

#  Scenario: Logout from site
#
#    Given return to main page
#    Then press logout from main page
#  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

#========================================

  #    menu button doesn't work now

#    Given click "SEARCH" at main page
#    Then open menu at map page
#    Then click on Our Price page
#    And see Our Price page and click return
#    Then open menu at map page

#  code in login.js!!!!!!!!!!!!

#    And return to main page

#  Scenario: Check profile page
#
#    Given click "SEARCH" at main page
#    Then open menu at map page
#    Then click on Profile page
#    And see Profile page

#  code in login.js!!!!!!!!!!!!

#    Then return to main page from booking page

#    code in login.js!!!!!!!!!!!!
#
#    Given open menu at map page
#    Then return to main page
#    And press logout from main page

#  When we redesign
#
#  Scenario Outline: Check all buttons on map page
#
#    Given click <map_buttons> //bags
#    Then see elements on <map_buttons>
#
#    Examples:
#    |map_buttons|
#    |    bags   |
#    |   dates   |
#    |   marker  |
#    |   search  |
