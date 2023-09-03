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

//     .assert.containsText('', '')
//     .waitForElementVisible('', [3500])

Then (/^click Integration$/, async () => {
    await browser
        .pause(1000)
        .click('/html/body/div[4]/div[3]/nav/button[2]');
});

Then (/^check elements on Integration page$/, async () => {
    await browser
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/h1', 'Integrations')
        .assert.containsText('//*[@id="root"]/div/section/div/div[2]/div[2]/div[2]', 'Guesty Integration')
        .assert.containsText('//*[@id="root"]/div/section/div/div[2]/button', 'Add integration')
        .assert.containsText('//*[@id="root"]/div/section/div/div[3]/div[2]/div[2]', 'Booking Automation')
        .assert.containsText('//*[@id="root"]/div/section/div/div[3]/button', 'ADD INTEGRATION')
        .waitForElementVisible('//*[@id="root"]/div/section/div/div[2]/div[2]/div[1]', [3500])
        .waitForElementVisible('//*[@id="root"]/div/section/div/div[2]/div[3]/div', [3500])
        .waitForElementVisible('//*[@id="root"]/div/section/div/div[3]/div[2]/div[1]', [3500])
        .waitForElementVisible('//*[@id="root"]/div/section/div/div[3]/div[3]/div', [3500]);
});

Then (/^click on Guesty page$/, async () => {
    await browser
        .click('//*[@id="root"]/div/section/div/div[2]/button')
        .pause(1000);
});

Then (/^check elements on Guesty page$/, async () => {
    await browser
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/div[2]/h1', 'Guesty')
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/div[2]/div', 'Integration Configuration')
        .assert.containsText('//*[@id="root"]/div/section/div/div[2]/a', 'Click to add your company info')
        .assert.containsText('//*[@id="root"]/div/section/div/form/div[1]/div/div[1]', 'API Key Provided from Guesty')
        .assert.containsText('//*[@id="root"]/div/section/div/form/div[2]/div/div[1]', 'Setup Features')
        .assert.containsText('//*[@id="root"]/div/section/div/form/div[2]/div/div[2]/label', 'Enable Guest Email Send')
        .waitForElementVisible('//*[@id="root"]/div/section/div/div[1]/div[1]', [3500])
        .waitForElementVisible('//*[@id="root"]/div/section/div/form/div[2]/div/div[2]/label/span', [3500]);
});

// Then (/^$/, async () => {
//     await client
// });
