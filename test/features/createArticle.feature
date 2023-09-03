Feature: Create article from admin page, for check new article page we need waite 1 minute!!!!!
  We check new page and changes for this page in another file!

  Scenario: Create article

    Then open admin page
    And go to create article page
#    Then create article
##    And logout from admin page
##
##  Scenario: Edit article
##
##    Given open admin page
##    Then open test article
##    And change section
    And logout from admin page
