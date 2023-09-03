const {Given, Then, When, Before} = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

const names = faker.person.firstName();
const names2 = faker.person.firstName();
const lastName = faker.person.lastName();
const country = faker.location.country();
const ZIP = faker.location.zipCode();
const state = faker.location.state();
const city = faker.location.city();
const address = faker.location.streetAddress();
const number = faker.phone.number();
const mail = faker.internet.email();

Given (/^click on My Bookings$/, async () => {
    await browser
        .click('//*[@id="root"]/div/main/header/div[2]/div/a[2]')
        .pause(1000);
});

Then (/^see My Bookings page$/, async () => {
    await browser
        .assert.containsText('//*[@id="root"]/div/section/header/div/div/div/button[1]/span[1]', 'MY BOOKINGS')
        .assert.containsText('//*[@id="root"]/div/section/header/div/div/div/button[2]/span[1]', 'LISTING BOOKINGS')
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/div[1]', 'Welcome Aleksey')
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/div[2]', 'To your new BagsAway Dashboard')
        .waitForElementVisible('//*[@id="root"]/div/section/div/div[2]', [3500]);
});

Then (/^open menu at My Bookings page$/, async () => {
    await browser
        .click('//*[@id="root"]/div/header/div/div/button')
        .pause(1000)
        .assert.containsText('/html/body/div[4]/div[3]/div[2]/span[2]', 'Aleksey Deadpooolsey')
        .assert.containsText('/html/body/div[4]/div[3]/nav/button[1]', 'My bookings')
        .assert.containsText('/html/body/div[4]/div[3]/nav/button[2]', 'Integrations')
        .assert.containsText('/html/body/div[4]/div[3]/nav/button[3]', 'Settings')
        .assert.containsText('/html/body/div[4]/div[3]/nav/button[4]', 'Logout');
});

Then (/^click Settings$/, async () => {
    await browser
        .click('/html/body/div[4]/div[3]/nav/button[3]')
        .pause(1000);
});

Then (/^check elements on Settings page$/, async () => {
    await browser
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/h1', 'Settings');
});

Then (/^change Personal information$/, async () => {
    await browser
        .click('//*[@id="root"]/div/section/div/div[3]/div[1]/div[1]/div[2]')
        .setValue('/html/body/div[1]/div/section/div/div[3]/div[1]/div[2]/div/div/div/div/form/div[2]/div/input', names)
        .setValue('/html/body/div[1]/div/section/div/div[3]/div[1]/div[2]/div/div/div/div/form/div[3]/div/input', lastName)
        .setValue('/html/body/div[1]/div/section/div/div[3]/div[1]/div[2]/div/div/div/div/form/div[4]/div/input', number)
        .pause(1000);
});

Then (/^click save Settings$/, async () => {
    await browser
        .click('/html/body/div[1]/div/section/div/button')
        .assert.containsText('//*[@id="message-id"]', '- Changes were successfully saved -')
        .pause(1000);
});

Then (/^change Company Information$/, async () => {
    await browser
        .click('//*[@id="root"]/div/section/div/div[3]/div[2]/div[1]/div[2]')
        .setValue('/html/body/div[1]/div/section/div/div[3]/div[2]/div[2]/div/div/div/div/form/div[2]/div/input', names2)
        .setValue('/html/body/div[1]/div/section/div/div[3]/div[2]/div[2]/div/div/div/div/form/div[3]/div/input', mail)
        .pause(1000);
});


//     .assert.containsText('', '')
//     .waitForElementVisible('', [3500])
