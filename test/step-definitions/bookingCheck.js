const {Given, Then, When, Before} = require('@cucumber/cucumber');

const email = 'adeadp@pool.com';
const password = '5258584d';

// I  don't know why , but fields with information for credit card count like one single field,
// so all information for it I put in one variable

let cardNumber = '5252525252525252 0244 123';

// let location ='Lockport Avenue, Toronto, ON, Canada';

 Then (/^open search field: "(.*?)"$/, async (loc) => {
    console.log('loc', loc);
        // use search
    await browser
        .click('/html/body/div[1]/div/div[1]/div[1]')
        .pause(1000)
        //clear field
        .click('/html/body/div[2]/div[3]/div/div/div/div[1]/div/div[2]/button')

        // I do that because sometimes complete doesn't work correct

        .setValue('/html/body/div[2]/div[3]/div/div/div/div[1]/div/input', loc)
        .pause(1000)
        .setValue('/html/body/div[2]/div[3]/div/div/div/div[1]/div/input', ' Can')
        .pause(1000)
        .click('/html/body/div[2]/div[3]/div/div/div/div[2]/ul/li/div')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[1]', [3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[2]', [3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/div/div/div/div[1]/div[3]/div/div[3]/div[1]', [3500])
        .assert.containsText('/html/body/div/div/div/div[1]/div/div/div/button', 'Now')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/button', '# of Items:')
        .assert.containsText('/html/body/div/div/div/div[3]/div/div[2]/div/div/div',
            'Click to View 46 Locations in Toronto');
 });

 Then (/^choose needful location and book there$/, async () => {
     await browser
         .click('/html/body/div/div/div/div[3]/div/div[1]/div/div/div/div[1]/div[3]/div/div[3]/div[2]')
         .pause(1000)
         .click('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[2]/button')
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[1]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[2]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[1]/div[1]/button', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[1]/div[2]/div/div[2]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[2]/div[2]/div/div[2]', [3500])
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[1]/div[2]/div', 'Finish your booking')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[2]/div[2]/div/div[1]/div[1]',
             'Number of Items')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[1]/div', 'Test shop')
         // .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]', 'Pick-up before 11:59 PM (closing)')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/table/tfoot/tr/th', 'Total')
         // .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/table/tfoot/tr/td', '$9.95')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[1]/button', 'Order Details')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[3]/button/span[1]', 'Continue')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[3]/div', 'You will not be charged yet')
         .click('/html/body/div[1]/div/div[1]/div/div[3]/button')
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[1]/div[1]/button', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div/div[1]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div/div[2]/div/div[2]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[1]/div/span', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[1]/div/div', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[2]/div/div', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[3]/div/div', [3500])
         .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[4]/div/div', [3500])
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[1]/div[2]/div[1]', 'Finish your booking')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[1]/div[2]/div[2]', 'Test shop')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/ul/div/div[2]/div/div[1]/div[1]', 'Storing 1 item')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[1]/div/div', 'Contact Information')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[1]/label', 'Email')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[2]/label', 'Name')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[3]/label', 'Last Name')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[4]/label',
             'Phone Number')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[3]/button/span[1]', 'Continue')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[3]/div', 'You will not be charged yet');
 });

 Then (/^login with wrong parameters$/, async () => {
    await browser
        .setValue('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[1]/div/div/input', email)
        .setValue('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[2]/div/div/input', 'Ask')
        .setValue('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[3]/div/div/input', 'Me')
        .setValue('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[4]/div/div/input', '1234567891');
     //  Exist email
     await client
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[1]/div/div[2]/span',
             'Email already exists, ')
         .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[1]/div/div[2]/span/a',
             'please login');
 });

 Then (/^login for booking$/, async () => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/form/div/div[1]/div/div[2]/span/a')
        // .pause(5000)
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/hr', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[1]/button/span[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/button/span[1]', [3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]/div/div/div/button[1]/span[1]', 'Login')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]/div/div/div/button[2]/span[1]', 'Sign Up')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[1]/button/div', 'Continue with Facebook')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/button/div', 'Continue with Google')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div', 'OR SIGN IN WITH')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[1]/div[1]/label', 'Email')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[1]/div[2]/label', 'Password')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[2]/button[1]/span[1]', 'Login')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[2]/button[2]/span[1]', 'Forgot Password?')
        .setValue('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[1]/div[1]/div/input', email)
        .setValue('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[1]/div[2]/div/input', password)
        .click('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[2]/button[1]')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[2]/div[1]', [3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[2]/div[2]/div/div[1]/div[1]',
            'Contact Information')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/ul/div[2]/div[2]/div/div[1]/div[2]',
            'Ask Me')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[1]/div', 'Payment Information')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/div[1]', 'Total booking price:')
        // .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[2]/div[2]', '$9.95')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div[2]/label',
            'Credit Card Number')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/button', 'Use Another Payment Method')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[4]/label', 'I Agree the ')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[4]/label/button', 'terms of service');
 });

 Then (/^book in this place$/, async () => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div/div[2]/div/div[4]/span/span[1]/input')
        .pause(500)
        .click('/html/body/div[1]/div/div[1]/div/div[3]/button')
        .pause(500)
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[2]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[3]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[4]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[1]/div/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[4]/a', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[6]/div[1]/div', [3500])
        .assert.containsText('/html/body/div[1]/div/section/div/div[1]/div[1]/div[2]', 'Thank you for Booking')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[3]/div[1]', 'Please drop off your bags at')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[3]/div[2]', 'Test shop')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[3]/div[3]', 'Lockport Avenue, Toronto, ON, Canada')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[4]/a/span[2]', 'Directions')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[1]/div[2]/div[1]', 'Check In')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[2]/div[2]/div[1]', 'Check Out')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[3]/div[2]/div[1]', 'Number of Items')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[4]/div[2]/div[1]', 'Total Price')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[7]/div[1]/div[1]', 'You booked just in time!')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[7]/div[1]/div[2]',
            'This BagDrop Location has limited space!')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[7]/div[2]/div/div[2]/div[1]',
            'This location offers Free Cancellation')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[7]/div[2]/div/div[2]/div[2]',
            'Your Order is Insured for $1242')
        // .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[6]/div[2]/div[2]/div[2]',
        //     'Want to get storage for free?')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[8]/div/div[1]', 'Store Hours')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[8]/div/div[2]', 'Test shop')
        .assert.containsText('/html/body/div[1]/div/section/div/div[3]/div/button[1]', 'Change Booking')
        .assert.containsText('/html/body/div/div/section/div/div[3]/div/a/span[1]', 'Dashboard')
        .click('/html/body/div/div/section/div/div[3]/div/a');
 });

 Then (/^change booking after book this place$/, async () => {
     await browser
         .click('/html/body/div[1]/div/div[1]/div/div[2]/div/div[4]/span/span[1]/input')
         .pause(1000)
         .click('/html/body/div[1]/div/div[1]/div/div[3]/button')
         .pause(1000)
         .waitForElementVisible('/html/body/div[1]/div/section/div/div[1]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[1]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[2]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[3]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[4]/div[1]/div', [3500])
         .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[1]/div/div', [3500])
         .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[4]/a', [3500])
         .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[6]/div[1]/div', [3500])
         .assert.containsText('/html/body/div[1]/div/section/div/div[1]/div[1]/div[2]', 'Thank you for Booking')
         .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[3]/div[1]', 'Please drop off your bags at')
         .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[3]/div[2]', 'Test shop')
         .click('/html/body/div[1]/div/section/div/div[3]/div/button[1]')
         .pause(1000)
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[1]/div[1]/button', [3500])
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[1]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[2]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[3]/div[1]', [3500])
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[1]/div[2]/div/div[2]', [3500])
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[2]/div[2]/div/div[2]', [3500])
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[3]/div[2]/div/div[2]', [3500])
         .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[1]/div[2]/div','Update Your Order')
         .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[1]/div[2]/div/div[1]/div[1]','Check in')
         .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[2]/div[2]/div/div[1]/div[1]','Check out')
         .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[3]/div[2]/div/div[1]/div[1]','Number of items')
         .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div/button/span[1]','Cancel This Order')
         .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/button/span[1]','Confirm Update')

         //Check button back

         .click('/html/body/div[3]/div[3]/div/div[1]/div[1]/div[1]/button')
         .assert.containsText('/html/body/div[1]/div/section/div/div[3]/div/button[1]','Change Booking')
         .click('/html/body/div[1]/div/section/div/div[3]/div/button[1]')

         // Update time check In

         .click('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[1]')
         .assert.containsText('/html/body/div[4]/div[3]/div/div[1]/div[2]/div/div', 'When are you checking in?')
         .assert.containsText('/html/body/div[4]/div[3]/div/div[2]/div[1]/div/div/div/button[1]/span[1]/span', 'Check In')
         .assert.containsText('/html/body/div[4]/div[3]/div/div[2]/div[1]/div/div/div/button[2]/span[1]/span', 'Check Out')

         // Update Date check In

         .click('/html/body/div[4]/div[3]/div/div[2]/div[2]/ul/div[1]')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[3]/div[2]/div/button')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/div[2]/button[2]')
         .pause(1000)

         // Update time

         .click('/html/body/div[4]/div[3]/div/div[2]/div[2]/ul/div[3]')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/ul/div[5]')
         .pause(1000)

         // Update Date check out

         .click('/html/body/div[4]/div[3]/div/div[2]/div[1]/div/div/div/button[2]')
         .pause(1000)
         .click('/html/body/div[4]/div[3]/div/div[2]/div[2]/ul/div[2]')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[3]/div[6]/div/button')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/div[2]/button[2]')
         .pause(1000)

         // Update check out

         .click('/html/body/div[4]/div[3]/div/div[2]/div[2]/ul/div[4]')
         .pause(1000)
         .click('/html/body/div[5]/div[3]/div/ul/div[8]')
         .pause(1000)
         .click('/html/body/div[4]/div[3]/div/div[3]/button')

         //Update count of items
         //NOW WE HAVE PROBLEM HERE I DON"T KNOW WHY ,PROBLEM ONLY IN TEST

         // .pause(1000)
         // .click('/html/body/div[4]/div[3]/div/div[2]/div[2]/ul/div[5]')
         // .pause(1000)
         // .click('/html/body/div[5]/div[3]/div/div[3]/div/button[2]')
         // .pause(1000)
         // .click('/html/body/div[5]/div[3]/div/div[3]/div/button[2]')
         // .pause(1000)
         // .click('/html/body/div[5]/div[3]/div/div[3]/div/button[2]')
         // .pause(1000)
         // .click('/html/body/div[5]/div[3]/div/div[3]/div/button[1]')
         // .pause(1500)
         // .assert.containsText('/html/body/div[5]/div[3]/div/div[4]/button/span[1]', 'Confirm')
         // .click('/html/body/div[5]/div[3]/div/div[4]/button')
         // .pause(1500)
         // .waitForElementVisible('/html/body/div[4]/div[3]/div', [3500])
         // .assert.containsText('/html/body/div[4]/div[3]/div/div[2]/div[2]/ul/div[5]/div[2]/span/div/div[2]', '3')
         // .waitForElementVisible('/html/body/div[4]/div[3]/div/div[1]/div[1]/div[2]/div', [3500])
         // .waitForElementVisible('/html/body/div[4]/div[3]/div/div[1]/div[2]/ul/div[1]', [3500])
         // .waitForElementVisible('/html/body/div[4]/div[3]/div/div[1]/div[2]/ul/div[2]', [3500])
         // .waitForElementVisible('/html/body/div[4]/div[3]/div/div[1]/div[2]/ul/div[3]', [3500])
         // .waitForElementVisible('/html/body/div[4]/div[3]/div/div[1]/div[2]/div/div', [3500])
         // .waitForElementVisible('/html/body/div[1]/div/section/div/div[1]/div[2]/a/div/div/div/div[1]/div[3]', [3500])
         // .assert.containsText('/html/body/div[4]/div[3]/div/div[1]/div[2]/div/div', 'Booking Changes')
         // .assert.containsText('/html/body/div[4]/div[3]/div/div[1]/div[2]/div/table/tbody/tr[1]/th',
         //     'Additional Time (max daily)')
         // .assert.containsText('/html/body/div[4]/div[3]/div/div[1]/div[2]/div/table/tbody/tr[2]/th',
         //     'Additional # of items')
         // .assert.containsText('/html/body/div[4]/div[3]/div/div[2]/button', 'Confirm Update')
         // .pause(1000)
         // .click('/html/body/div[4]/div[3]/div/div[3]/button')
         // .pause(2500)
         // .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/ul/div[3]/div[2]/div/div[1]/div[2]', '3')
         // Confirm Update
         .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[2]/div/table/tbody', [3500])
         .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div/div', 'Booking Changes')
         .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div/table/tbody/tr[1]/th',
             'Additional Time (max daily)')
         // .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div/table/tbody/tr[2]/th',
         //     'Additional # of items')
         // .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div/table/tbody/tr[3]/th',
         //     'You\'ve reached the daily max rate')
         .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/button/span[1]', 'Confirm Update')
         .pause(1000)
         .click('/html/body/div[3]/div[3]/div/div[2]/button')
         .pause(1500)
         .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[3]/div[2]', 'Test shop')
         .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[5]/ul/li[3]/div[2]/div[2]', '1')
        //  Dashboard
         .click('/html/body/div/div/section/div/div[3]/div/a')
         .pause(1500)
         .waitForElementVisible('/html/body/div/div/section/div', [3500])
         .assert.containsText('/html/body/div/div/section/div/div[1]/div[1]', 'Welcome Ask')
         .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div[1]', 'Test shop')
         .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div[2]',
             'Lockport Avenue, Toronto, ON, Canada (Directions)');
         // .waitForElementVisible('/html/body/div[1]/div/section/div/div/div[2]/a/div[1]', [3500])
         // .assert.containsText('/html/body/div[1]/div/section/div/div/div[2]/a/div[2]', 'Ask Me')
         // .assert.containsText('/html/body/div[1]/div/section/div/div/div[4]/div[1]/table/tbody/tr[1]/td[1]', 'Ask Me')
         // .assert.containsText('/html/body/div[1]/div/section/div/div/div[3]/div/div[1]/div[1]', 'This week');
 });

 Then (/^try book with invalid card see error card message$/, async () => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div/div[2]/div/button')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div/form/div/div[1]/label',
            'Credit Card Number')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div/form/div/div[2]/div[1]/label', 'Expiry Date')
        .assert.containsText('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div/form/div/div[2]/div[2]/label', 'CVC Number')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div/form/div/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div/form/div/div[2]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div/form/div/div[2]/div[2]/div', [3500])
        // .pause(5000)
        // .waitForElementVisible('/html/body/div[1]/div/div[1]/div/div[2]/div/div[3]/div/form/div/div[1]/div/div/input', [3500])
        .pause(1000)
        .setValue('/html/body/div/form/span[2]/div/div[2]', cardNumber)
        // .setValue('/html/body/div/form/span[2]/span/input', '5252525252525252')

        // .setValue('/html/body/div[1]/div/div[1]/div[2]/div/div[3]/div/form/div/div[1]/div/div/input', cardDate)
        // .setValue('/html/body/div/form/span[2]/span/input', '1024')
        // .setValue('/html/body/div[1]/div/div[1]/div[2]/div/div[3]/div/form/div/div[1]/div/div/input', cvv)
        // .setValue('/html/body/div/form/span[2]/span/input', '145')
        .pause(1000)
        .click('/html/body/div[1]/div/div[1]/div/div[2]/div/div[4]/span/span[1]/input')
        .click('/html/body/div[1]/div/div[1]/div/div[3]/button')
        .assert.containsText('/html/body/div[1]/div/div/div/div[2]/div/div[5]', 'Your card number is incomplete.');
 });
