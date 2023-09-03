const {Given, Then, When, Before} = require('@cucumber/cucumber');
let pass = '5258584d', email= 'adeadp@pool.com';

Given(/^open menu$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div', [3500])
        .click('/html/body/div[1]/div/div[1]/div[1]/div/button')
        .pause(1500)
        .waitForElementVisible('/html/body/div[2]/div[3]/button',[3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/a[1]/div/div/div[2]',[3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/div[1]/div/div/div[2]',[3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/div[2]/div/div/div[2]',[3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/a[3]/div/div/div[2]',[3500])
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[1]/div/div/div[1]', 'HOME')
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[2]/div/div/div', 'MY BOOKINGS')
        .assert.containsText('/html/body/div[2]/div[3]/ul/div[1]/div/div/div[1]', 'FAQ')
        .assert.containsText('/html/body/div[2]/div[3]/ul/div[2]/div/div/div[1]', 'SUPPORT')
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[3]/div/div/div[1]', 'OWN A SHOP? JOIN US!');
});

Then(/^open menu after login$/, async () => {
    await browser
        .refresh()
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div/button', [3500])
        .pause(1500)
        .click('/html/body/div/div/div/div[1]/div/button')
        .pause(1500)
        .waitForElementVisible('/html/body/div[2]/div[3]/button',[3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/a[1]/div/div/div[2]',[3500])
        // .waitForElementVisible('/html/body/div[2]/div[3]/ul/div[1]/div/div/div[2]',[3500])
        // .waitForElementVisible('/html/body/div[2]/div[3]/ul/div[2]/div/div/div[2]',[3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/a[3]/div/div/div[2]',[3500])
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[1]/div/div/div[1]', 'HOME')
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[2]/div/div/div', 'MY BOOKINGS')
        // .assert.containsText('/html/body/div[2]/div[3]/ul/div[1]/div/div/div[1]', 'FAQ')
        // .assert.containsText('/html/body/div[2]/div[3]/ul/div[2]/div/div/div[1]', 'SUPPORT')
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[3]/div/div/div[1]', 'OWN A SHOP? JOIN US!')
        .assert.containsText('/html/body/div[2]/div[3]/ul/div[3]/div/div', 'Sign Out');
});

Then(/^sign in from menu$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/ul/div[3]/div')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]',[3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]/div/div/div/button[2]/span[1]', 'Sign Up')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]/div/div/div/button[1]/span[1]', 'Login')
        .setValue('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[1]/div[1]/div/input',email)
        .pause(500)
        .setValue('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[1]/div[2]/div/input',pass)
        .pause(500)
        .click('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[2]/button[1]')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div',[3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/button', '# of Items:');
});

Then(/^click on home$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/ul/a[1]')
        .pause(1000)
        .assert.containsText('/html/body/div/div/div/div[1]/div/div[3]/h1',
            'Let’s Store Your Bags Away!')
        .waitForElementVisible('/html/body/div/div/div/div[1]/div/div[5]/div[2]/button[1]',[3500]);
});

Then(/^see home page$/, async () => {
    // let test;
    await browser
        .pause(1500)
        .waitForElementVisible('/html/body/div/div/div/div[1]/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div/div/div[1]/div[1]/div[1]/div[3]',[3500])
        .waitForElementVisible('/html/body/div/div/div/div[1]/div/div[5]/div[2]',[3500])
        .waitForElementVisible('/html/body/div/div/div/div[1]/div/div[5]/div[3]/div',[3500])
        .assert.containsText('/html/body/div/div/div/div[1]/div/div[4]/h1', 'Trusted Luggage Storage Near You')
        .assert.containsText('/html/body/div/div/div/div[2]/div/div[2]', '4.8/5.0 from 1000+ Google reviews')
        .waitForElementVisible('/html/body/div/div/div/div[3]/section',[3500]);
});

Then(/^click on my bookings$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/ul/a[2]/div/div/div')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[1]/h2','Your bookings');
});

Then(/^see my bookings page$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div/div/header/div',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[1]',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]',[3500])
        .assert.containsText('/html/body/div/div/section/div/div[1]/div[1]', 'Welcome Ask')
        .assert.containsText('/html/body/div/div/section/div/div[1]/div[2]', 'To your new BagsAway Dashboard');
});

// Then(/^click on FAQ$/, async () => {
//     await browser
//         .waitForElementVisible('',[3500])
//         .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/ul/div[2]/div[2]/div/div[1]/div[2]', '1')
// });
//
// Then(/^see FAQ page$/, async () => {
//     await browser
//         .waitForElementVisible('',[3500])
//         .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/ul/div[2]/div[2]/div/div[1]/div[2]', '1')
// });
//
Then(/^click on support$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/div[2]/div',[3500])
        .click('/html/body/div[2]/div[3]/ul/div[2]/div');
});

Then(/^see support page$/, async () => {
    await browser

        // I DON'T KNOW WHY WE CAN'T CHECK MODALS I DON'T FIND THE ANSWER

        .waitForElementVisible('/html/body/div[2]',[3500])
        // .waitForElementVisible('/html/body/div/div/div[2]/div[5]/a[2]',[3500])
        // .waitForElementVisible('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div',[3500])
        // .waitForElementVisible('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div/div[1]/div/fieldset[1]',[3500])
        // .waitForElementVisible('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div/div[1]/div/fieldset[2]',[3500])
        // .waitForElementVisible('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div/div[1]/div/fieldset[3]',[3500])
        // .assert.containsText('/html/body/div/div/div[1]/div/div[1]/p/span', 'Sorry we\'re offline')
        // .assert.containsText('/html/body/div/div/div[2]/div[1]/div[1]/p[1]',
        //     'Have questions about our luggage storage options? Please fill the info form below and' +
        //     ' we\'ll get back to you as soon as possible!')
        // .assert.containsText('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div/div[1]/div/fieldset[1]/div[1]/label',
        //     '* Name')
        // .assert.containsText('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div/div[1]/div/fieldset[2]/div[1]/label',
        //     '* Email')
        // .assert.containsText('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div/div[1]/div/fieldset[3]/div[1]/label',
        //     '* Message')
        // .assert.containsText('/html/body/div/div/div[2]/div[7]/div/div[2]/div/div/div/div/div[2]/button', 'Submit')
        .click('/html/body/div[2]/div[3]/ul/div[2]/div')
        .waitForElementNotVisible('/html/body/div[2]',[3500])
        .click('/html/body/div[2]/div[3]/ul/a[1]');
});

Then(/^click on join us$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/a[3]/div',[3500])
        .click('/html/body/div[2]/div[3]/ul/a[3]/div')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]', 'Earn an extra');
});

Then(/^see join us page$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[4]/div/div[1]/span',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[4]/div/div[2]/span',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[4]/div/div[3]/span',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[4]/div/div[4]/span',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[4]/div/div[5]/span',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/footer/div/a[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/footer/div/a[2]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/footer/div/a[3]',[3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[1]/h1', 'Luggage Storage of the Future')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]', 'Earn an extra')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]', '+$8000')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[3]', 'In annual business income at no extra cost')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[3]/button/span[1]', 'CLICK TO JOIN TODAY!')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[1]/h2', 'Monetize your space')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[1]/div',
            'Convert unused space to luggage storage and earn substantial monthly income.')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[2]/h2', 'Drive new customers to your space')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[2]/div',
            'We send customers directly to you! Boost your business with new browsers to your products & services.')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[3]/h2', 'Always free')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[3]/div',
            'We never charge you a cent, we only deposit commissions!')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[4]/h2', 'Risk? We got you covered!')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[4]/div',
            'We insure the luggage; your only task is storing the bags away from public access. All risk & liability is on us.')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[5]/h2', 'Advertise for free!')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[4]/div/div[5]/div',
            'Run promotions & advertise your business directly to potential customers with a spending budget, at no extra cost.')
        .assert.containsText('/html/body/div[1]/div/div[1]/footer/a[1]', 'Privacy Policy')
        .assert.containsText('/html/body/div[1]/div/div[1]/footer/a[2]', 'Terms of Use')
        .assert.containsText('/html/body/div[1]/div/div[1]/footer/a[3]', 'About Us');
    // Modal for Join function
    await browser
        .click('/html/body/div[1]/div/div[1]/div[3]/button')
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[1]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[2]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[3]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[4]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[5]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[6]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[6]/div[1]/div[1]/div/input', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[6]/div[1]/div[1]/div/div/span', [3500])
        .assert.containsText('/html/body/div[2]/div[3]/div/div[1]/div[2]', 'Please tell us who you are')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[1]/div[1]/label', 'Email Address')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[2]/div[1]/label', 'First Name')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[3]/div[1]/label', 'Last Name')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[4]/div[1]/label', 'Phone Number (Cell)')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[5]/div[1]/label', 'You Business Name')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[3]/div/button', 'Click to Continue');
        // Check empty filds validation (No validation for phone number field)
    console.log('Check empty filds validation');
    await browser
        .click('/html/body/div[2]/div[3]/div/div[3]/div/button')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[2]', 'can\'t be blank')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[4]', 'can\'t be blank,is too short (minimum is 2 characters)')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[6]', 'can\'t be blank,is too short (minimum is 2 characters)')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[9]', 'can\'t be blank,is too short (minimum is 2 characters)')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div/div/div/div[11]', 'can\'t be blank,Invalid address');
        // Exit from modal
    console.log('Exit from modal');
    await browser
        .click('/html/body/div[2]/div[3]/div/div[1]/div[1]');
});

Then(/^return at map page$/, async () => {
    await browser
        .url('https://test123.bagsawaygo.com/map')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/div/div[1]/div/button',[3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[1]',[3500])
        .assert.containsText('/html/body/div/div/div/div[2]/button', '# of Items:');
});
