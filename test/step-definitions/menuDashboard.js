const {Given, Then, When, Before} = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

const discName = faker.person.firstName();
const discValue = 10;
const discSentence = faker.lorem.sentence();

Given(/^open dashboard page$/, async () => {
    await browser
        .url('https://test123.bagsawaygo.com/dashboard')
        .pause(2000)
        .waitForElementVisible('/html/body/div/div/section/div/div/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div/div/div[2]/a/div[1]', [3500])
        .assert.containsText('/html/body/div/div/section/div/div/div/div[2]/a/div[2]', 'Ask Me')
        .assert.containsText('/html/body/div/div/section/div/div/div/div[2]/a/div[4]', 'Partner since Jan 2020')
        .assert.containsText('/html/body/div/div/section/div/div/div/div[2]/a/div[3]', 'adeadp@pool.com')
        .assert.containsText('/html/body/div/div/section/div/div/div/div[3]/div/div[1]/div[1]', 'This week')
        .assert.containsText('/html/body/div/div/section/div/div/div/div[3]/div/div[2]/div[1]', 'Your balance')
        .assert.containsText('/html/body/div/div/section/div/div/div/div[4]/div[2]', 'See All Bookings');
    let weekMoney;
    let balanceMoney;
    let bookings;
    let available;
    await browser.getText('/html/body/div/div/section/div/div/div/div[3]/div/div[1]/div[2]',
        result => weekMoney = result);
    if(weekMoney && weekMoney.value) {
        if (weekMoney.value != null) {
            console.log('This week money', weekMoney.value);
        }
        else {
            console.log('This week money field is empty');
        }
    }
    await browser.getText('/html/body/div/div/section/div/div/div/div[3]/div/div[2]/div[2]',
        result => balanceMoney = result);
    if(balanceMoney && balanceMoney.value) {
        if (balanceMoney.value != null) {
            console.log('Your balance', balanceMoney.value);
        }
        else {
            console.log('Your balance money field is empty');
        }
    }
    await browser.getText('/html/body/div/div/section/div/div/div/div[3]/div/div[1]/div[3]',
        result => bookings = result);
    if(bookings && bookings.value) {
        if (bookings.value != null) {
            console.log('Bookings', bookings.value);
        }
        else {
            console.log('Bookings field is empty');
        }
    }
    await browser.getText('/html/body/div/div/section/div/div/div/div[3]/div/div[2]/div[3]',
        result => available = result);
    if(available && available.value) {
        if (available.value != null) {
            console.log('Your balance available money', available.value);
        }
        else {
            console.log('Your balance available money field is empty');
        }
    }
    // await browser
    //     .waitForElementVisible('', [3500])
    //     .assert.containsText('', '')
    //     .assert.containsText('', '')
    //     .assert.containsText('', '');
});

Then(/^open dashboard menu$/, async () => {
    await browser
        .click('/html/body/div/div/section/div/div/div/div[1]/div[1]/button')
        .waitForElementVisible('/html/body/div[2]/div[3]/div/a/div[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/a[1]/div/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/ul/a[2]/div/div/div[2]', [3500])
        // .waitForElementVisible('', [3500])
        // .waitForElementVisible('', [3500])
        .assert.containsText('/html/body/div[2]/div[3]/div/a/div[2]', 'Ask Me')
        .assert.containsText('/html/body/div[2]/div[3]/div/a/div[3]', 'adeadp@pool.com')
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[1]/div/div/div[1]', 'BOOKINGS')
        .assert.containsText('/html/body/div[2]/div[3]/ul/a[2]/div/div/div[1]', 'LISTINGS')
        .assert.containsText('/html/body/div[2]/div[3]/ul/div[1]/div/div/div', 'SUPPORT')
        .assert.containsText('/html/body/div[2]/div[3]/ul/div[2]/div/div', 'Sign Out');
});

Then(/^click back listing button$/, async () => {
    await browser
        .click('/html/body/div[1]/div/section/div/div[1]/div[1]/button')
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[2]', [3500])
        .assert.containsText('/html/body/div[1]/div/section/div/div[1]', 'Listing View');
});

Then(/^click on bookings$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/ul/a[1]')
        .waitForElementVisible('/html/body/div/div/section/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[1]/a', [3500])
        .assert.containsText('/html/body/div/div/section/div/div[1]/div[2]/div', 'Bookings');
});

Then(/^see bookings page$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div/div/section/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[1]/a', [3500])
        .assert.containsText('/html/body/div/div/section/div/div[1]/div[2]/div', 'Bookings')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[1]/div', 'Test shop')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[2]/div', 'Current Month');
});

Then(/^click on listings$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/ul/a[2]')
        .waitForElementVisible('/html/body/div/div/section/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]', [3500])
        .assert.containsText('/html/body/div/div/section/div/div[1]/div[2]/div', 'Your Listings')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[1]', '2 Listings');
});

Then(/^see listings page$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div/div/section/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/div/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[2]/ul/li[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[2]/ul/li[2]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/div/div[2]/ul/li[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/div/div[2]/ul/li[2]/div[1]', [3500])
        .assert.containsText('/html/body/div/div/section/div/div[1]/div[2]/div', 'Your Listings')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[1]', '2 Listings')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[2]/div', 'Test shop')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[2]/ul/li[1]/div[2]/div',
            'Lockport Avenue, Toronto, ON, Canada')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[2]/ul/li[2]/div[2]/div',
            'Open: 24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[2]/ul/li[3]/div[2]/div',
            'Update Holiday Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/button/span[1]', 'Manage Listing')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/div/div[2]/div', 'Place for Test')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/div/div[2]/ul/li[1]/div[2]/div',
            'Khreschatyk St, 10, Kyiv, 01001')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/div/div[2]/ul/li[2]/div[2]/div',
            'Open: 10:00 AM - 07:01 PM')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/div/div[2]/ul/li[3]/div[2]/div',
            'Update Holiday Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/button/span[1]', 'Manage Listing');
});

Then(/^click Test Shop$/, async () => {
    let listingName;
    await browser .getText('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/div/div[2]/div',
        result => listingName = result);
    if(listingName && listingName.value){
        if(listingName.value === 'Test shop'){
            await browser.click('/html/body/div/div/section/div/div[2]/div[2]/div[1]/div/button').pause(1000);
        } else {
            await browser.click('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/button').pause(1000);
        }
    }
});

Then(/^click Manage listing Test Shop$/, async () => {

    await browser
        .click('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div/button')
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[3]/a', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/ul/li[1]/div[2]/div/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[1]/div[2]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[6]/div[2]/div[1]/div[2]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[8]/div[2]/div[1]/div[2]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[2]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[6]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/ul/li[8]/div[1]/div', [3500])
        .assert.containsText('/html/body/div[1]/div/section/div/div[1]/div[2]/div', 'Listing View')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[2]', 'Test shop')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/ul/li[1]/div[2]/div',
            'Lockport Avenue, Toronto, ON, Canada')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/ul/li[2]/div[2]', '+1733339444')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[1]/div[1]',
            'Regular Business Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[1]/td[1]/div',
            'Monday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[2]/td[1]/div',
            'Tuesday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[3]/td[1]/div',
            'Wednesday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[4]/td[1]/div',
            'Thursday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[5]/td[1]/div',
            'Friday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[6]/td[1]/div',
            'Saturday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[7]/td[1]/div',
            'Sunday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[1]/td[2]',
            '24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[2]/td[2]',
            '24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[3]/td[2]',
            '24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[4]/td[2]',
            '24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[5]/td[2]',
            '24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[6]/td[2]',
            '24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[2]/table/tbody/tr[7]/td[2]',
            '24 hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[6]/div[2]/div[1]/div[1]',
            'Holiday Hours & Closures')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/ul/li[8]/div[2]/div[1]/div[1]',
            'Discount & Savings Offers');
});

Then(/^work with Edit listing$/, async () => {
    // I don't edit because it just add words in field, but we need clear field and wright new word
    await browser
        .click('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[3]/a')
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div/label/span/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div/label/span/div[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[2]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[3]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/label/span[1]', [3500])
        .assert.containsText('/html/body/div[1]/div/section/div/div[1]/div[2]/div', 'Edit Listing')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div/label/span/div[2]', 'Replace Photo')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[1]/label', 'Listing Name')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[2]/label', 'Listing Address')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[3]/label',
            'Public Business Phone At Location')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/label/span[2]/div/div[1]',
            'Notifications')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/label/span[2]/div/div[2]',
            'Receive booking emails')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/form/div[2]/div/a/span[1]', 'Cancel')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/form/div[2]/div/button/span[1]', 'Apply');
});

Then(/^with Regular hours$/, async () => {
    await browser
        .click('/html/body/div/div/section/div/div[2]/div/ul/li[4]/div[2]/div[1]/div[2]')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/section/div/div[1]/div[1]/button',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[1]/label/span[1]',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[1]/div[2]/div/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[1]/div[2]/div/div/div[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[2]/div[1]/label/span[1]',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[2]/div[2]/div/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[2]/div[2]/div/div/div[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[3]/div[1]/label/span[1]',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[3]/div[2]/div/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[3]/div[2]/div/div/div[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[4]/div[1]/label/span[1]',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[4]/div[2]/div/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[3]/div[2]/div/div/div[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[5]/div[1]/label/span[1]',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[5]/div[2]/div/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[5]/div[2]/div/div/div[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[6]/div[1]/label/span[1]',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[6]/div[2]/div/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/div[6]/div[2]/div/div/div[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[7]/div[1]/label/span[1]',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[7]/div[2]/div/div/div[2]/button',[3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[7]/div[2]/div/div/div[1]',[3500])
        .assert.containsText('/html/body/div/div/section/div/div[1]/div[2]/div', 'Regular Business Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[1]/div[1]/div', 'Monday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[1]/div[1]/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[1]/div[2]/button', 'Add Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[2]/div[1]/div', 'Tuesday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[2]/div[1]/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[2]/div[2]/button', 'Add Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[3]/div[1]/div', 'Wednesday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[3]/div[1]/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[3]/div[2]/button', 'Add Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[4]/div[1]/div', 'Thursday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[4]/div[1]/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[4]/div[2]/button', 'Add Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[5]/div[1]/div', 'Friday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[5]/div[1]/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[5]/div[2]/button', 'Add Hours')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[6]/div[1]/div', 'Saturday')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[6]/div[1]/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/div[6]/div[2]/button', 'Add Hours')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[7]/div[1]/div', 'Sunday')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[7]/div[1]/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[7]/div[2]/button', 'Add Hours')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[8]/div/a/span[1]', 'Cancel')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[8]/div/button/span[1]', 'Apply');
});

Then(/^Holiday$/, async () => {
    await browser
        .click('/html/body/div/div/section/div/div[2]/div/ul/li[6]/div[2]/div[1]/div[2]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div[2]/div/div', [3500])
        .assert.containsText('/html/body/div[1]/div/section/div/div[1]/div[2]/div', 'Holiday Hours')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[1]', 'Please Update your holiday hours')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[2]/button', 'Add New Date')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div[2]/div/div/a/span[1]', 'Cancel')
        // Add new date
        .click('/html/body/div[1]/div/section/div/div[2]/div[2]/button')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/label/span[1]', [3500])
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/label/span[2]/div', 'Open')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div[2]/button', 'Add Hours')
        // Open calendar and click Cancel
        .click('/html/body/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div/div/input')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/button[1]', 'CANCEL')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/button[2]', 'OK')
        .waitForElementVisible('/html/body/div[2]/div[3]/div', [3500])
        .click('/html/body/div[2]/div[3]/div/div[2]/button[1]')
        // click Add new date second time and add hours
        .pause(1000)
        .click('/html/body/div[1]/div/section/div/div[2]/div[2]/button')
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[3]/div[1]/div/div/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[3]/div[2]/div/div/div[1]', [3500]);
        // .click('/html/body/div/div/section/div/div[2]/div[2]/div[3]/div[2]/div/div/div[1]/div')
        // .waitForElementVisible('/html/body/div[2]/div[3]/ul/li[8]', [3500])
        // .click('/html/body/div[2]/div[3]/ul/li[8]')
        // .waitForElementVisible('/html/body/div/div/section/div/div[2]/div[2]/div[3]/div[2]/div/div/div[2]', [3500])
        // .click('/html/body/div/div/section/div/div[2]/div[2]/div[3]/div[2]/div/div/div[2]')
        // .waitForElementVisible('/html/body/div[2]/div[3]/ul/li[18]', [3500])
        // .click('/html/body/div[2]/div[3]/ul/li[18]');
});

Then(/^Discount$/, async () => {
    await browser
        .click('/html/body/div/div/section/div/div[2]/div/ul/li[8]/div[2]/div[1]/div[2]/a')
        .pause(1000)
        .waitForElementVisible('/html/body/div[1]/div/section/div/div[1]/div[1]/button', [3500])
        .assert.containsText('/html/body/div[1]/div/section/div/div[1]/div[2]/div', 'Discounts & Promotions')
        .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/div[1]', 'Offer Promotions & Discounts to ' +
            'increase the chances of your product and services being purchased by our mutual customers when they ' +
            'arrive at your shop')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/form/div[2]/button', 'Add Another Discount')
         // Click Add another Discount
        .pause(1000)
        .click('/html/body/div/div/section/div/div[2]/div/form/div[2]/button')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/form/div[1]/div/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/form/div[1]/div/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/form/div[1]/div/div[2]/div', [3500])
        .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/form/div[1]/div/div[3]/div', [3500])
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/form/div[1]/div/div[2]/label',
            'Discount percentage')
        .assert.containsText('/html/body/div/div/section/div/div[2]/div/form/div[1]/div/div[3]/label',
            'EFFECTIVE ON THE FOLLOWING PRODUCTS');
});

Then(/^add discount$/,async () => {
   await browser
       .setValue('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[2]/div[1]/div/input', discName)
       .pause(1000)
       .setValue('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[2]/div[2]/div/input', discValue)
       .pause(1000)
       .setValue('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[2]/div[3]/div/textarea[1]', discSentence)
       .pause(1000)
       .click('/html/body/div[1]/div/section/div/div[2]/div/form/div[3]/div/button')
       .pause(1000)
       .click('/html/body/div/div/section/div/div[1]/div[1]/button')
       .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/ul/li[8]/div[2]/div[2]/table/tbody/tr[2]/td[1]',
           [3500])
       .assert.containsText('/html/body/div[1]/div/section/div/div[2]/div/ul/li[8]/div[2]/div[2]/table/tbody/tr[2]/td[2]',
           discSentence);
});

Then(/^delete discount$/,async () => {
   await browser
       .click('/html/body/div[1]/div/section/div/div[2]/div/ul/li[8]/div[2]/div[1]/div[2]/a')
       .pause(1000)
       .waitForElementVisible('/html/body/div/div/section/div/div[2]/div/form/div[1]/div/div[1]/button', [3500])
       .pause(1000)
       .click('/html/body/div[1]/div/section/div/div[2]/div/form/div[1]/div[2]/div[1]/button')
       .pause(1000)
       .click('/html/body/div[1]/div/section/div/div[2]/div/form/div[3]/div/button')
       .pause(1000)
       .click('/html/body/div/div/section/div/div[1]/div[1]/button')
       .pause(1000)
       .waitForElementVisible('/html/body/div[1]/div/section/div/div[2]/div/div[1]/div[2]', [3500])
       .waitForElementNotPresent('/html/body/div[1]/div/section/div/div[2]/div/ul/li[8]/div[2]/div[2]/table/tbody/tr[2]/td[1]', [3500]);
});
