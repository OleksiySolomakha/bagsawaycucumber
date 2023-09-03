const {Given, Then, When, Before} = require('@cucumber/cucumber');

// import { client } from 'nightwatch-api';

let pass = 'password', email= 'haha.com';
const { faker } = require('@faker-js/faker');

// const slug = faker.name.firstName();
const title = faker.person.firstName();
const desc = faker.person.lastName();
const keyword = faker.location.state();
const ZIP = faker.location.zipCode();
const state = faker.location.state();
const slug = faker.lorem.slug();
const address = faker.location.country();
const number = faker.phone.number();
const mail = faker.internet.email();
const image = '/home/test/doc/bagsawaycucumber/test/img/';

Given(/^open admin page$/, async () => {
    await browser
        .useXpath()
        .url('https://api-test.bagsawaygo.com/admin/login')
        .waitForElementVisible('/html/body/div/div[1]/div/div', [3500])
        .waitForElementVisible('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[1]/input', [3500])
        .waitForElementVisible('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[2]/input', [3500])
        .waitForElementVisible('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[3]/label/input', [3500])
        .waitForElementVisible('/html/body/div/div[1]/div/div/form/fieldset[2]/ol/li/input', [3500])
        .assert.containsText('/html/body/div/div[1]/div/div/h2', 'Bagsaway Luggage Storage Login')
        .assert.containsText('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[1]/label', 'Email*')
        .assert.containsText('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[2]/label', 'Password*')
        .assert.containsText('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[3]/label', 'Remember me')
        .assert.containsText('/html/body/div/div[1]/div/div/a', 'Forgot your password?')
        .setValue('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[1]/input', email)
        .setValue('/html/body/div/div[1]/div/div/form/fieldset[1]/ol/li[2]/input', pass)
        .click('/html/body/div/div[1]/div/div/form/fieldset[2]/ol/li/input')
        .pause(1500)
        .waitForElementVisible('/html/body/div/div[1]/ul[2]', [3500])
        .waitForElementVisible('/html/body/div/div[1]/ul[2]/li[1]', [3500])
        .waitForElementVisible('/html/body/div/div[1]/ul[2]/li[2]', [3500])
        .assert.containsText('/html/body/div/div[1]/h1', 'Bagsaway Luggage Storage')
        .assert.containsText('/html/body/div/div[2]/div[1]', 'Dashboard')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[1]', 'Dashboard')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[2]', 'Admins')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[3]', 'Approval Requests')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[4]', 'Bookings')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[5]', 'CMS')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[6]', 'City Pricings')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[7]', 'Companies')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[8]', 'Country Pricings')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[9]', 'Coupons')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[10]', 'Integrations')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[11]', 'Landing')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[12]', 'Listings')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[13]', 'Payment Infos')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[14]', 'Payouts')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[15]', 'Reviews')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[16]', 'Search Results')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[17]', 'Settings')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[18]', 'Special Hours')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[19]', 'Users');
});

Given(/^open article page$/, async () => {
    await browser
        .useXpath()
        .url('https://test123.bagsawaygo.com/blog/test-a')
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .assert.containsText('', '')
        .assert.containsText('', '')
        .assert.containsText('', '')
});

Then(/^go to create article page$/, async () => {
    await browser
        .click('/html/body/div/div[1]/ul[1]/li[5]')
        .pause(1000)
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[5]/ul/li[1]', 'Components')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[5]/ul/li[2]', 'Experiences')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[5]/ul/li[3]', 'Faqs')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[5]/ul/li[4]', 'Pages')
        .assert.containsText('/html/body/div/div[1]/ul[1]/li[5]/ul/li[5]', 'Sections')
        .click('/html/body/div/div[1]/ul[1]/li[5]/ul/li[4]')
        .pause(1000)
        .assert.containsText('/html/body/div/div[2]/div[1]/span/a', 'Admin')
        .assert.containsText('/html/body/div/div[2]/div[1]/h2', 'Pages')
        .assert.containsText('/html/body/div/div[4]/div[1]/div/form/div[2]/div[1]/div/div/table/tbody/tr[1]/td[5]/div/a[1]',
            'View')
        .assert.containsText('/html/body/div/div[4]/div[1]/div/form/div[2]/div[1]/div/div/table/tbody/tr[1]/td[5]/div/a[2]',
            'Edit')
        .assert.containsText('/html/body/div/div[4]/div[1]/div/form/div[2]/div[1]/div/div/table/tbody/tr[1]/td[5]/div/a[3]',
            'Delete')
        .click('/html/body/div/div[2]/div[2]/div')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[1]/select', [3500])
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[2]/input', [3500])
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[3]/label/input', [3500])
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[4]/input', [3500])
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[5]/select', [3500])
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[6]/input', [3500])
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[7]/div/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div/div[4]/div/div/form/li[8]/div/div/div[2]', [3500])
        .assert.containsText('/html/body/div/div[2]/div[1]/h2', 'New Page')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[1]/label', 'Page type')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[2]/label', 'Slug')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[3]/label', 'Top favorite')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[4]/label', 'Address')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[5]/label', 'Parent')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[6]/label', 'Background Image')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[7]/label', 'Meta tags')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[7]/div/div/div[2]/div/table/tbody/tr[2]/td[3]/table/tbody/tr/td[2]/div',
            'title')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[7]/div/div/div[2]/div/table/tbody/tr[3]/td[3]/table/tbody/tr/td[2]/div',
            'description')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[7]/div/div/div[2]/div/table/tbody/tr[4]/td[3]/table/tbody/tr/td[2]/div',
            'keywords')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[8]/div/div/div[2]/div/table/tbody/tr[2]/td[3]/table/tbody/tr/td[2]/div',
            'country')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[8]/div/div/div[2]/div/table/tbody/tr[3]/td[3]/table/tbody/tr/td[2]/div',
            'state')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[8]/label', 'Settings')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[8]/div/div/div[2]/div/table/tbody/tr[4]/td[3]/table/tbody/tr/td[2]/div',
            'city')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[8]/div/div/div[2]/div/table/tbody/tr[5]/td[3]/table/tbody/tr/td[2]/div',
            'default_price')
        .assert.containsText('/html/body/div/div[4]/div/div/form/li[8]/div/div/div[2]/div/table/tbody/tr[6]/td[3]/table/tbody/tr/td[2]/div',
            'review_link')
        .assert.containsText('/html/body/div/div[4]/div/div/form/fieldset[1]/legend/span', 'Section')
        .assert.containsText('/html/body/div/div[4]/div/div/form/fieldset[1]/ol/li/a', 'Add Section')
        // .assert.containsText('/html/body/div/div[4]/div/div/form/fieldset[2]', 'Create Page')
        .assert.containsText('/html/body/div/div[4]/div/div/form/fieldset[2]/ol/li[2]/a', 'Cancel');
});

Then(/^create article$/, async () => {
    await browser
        .click('/html/body/div/div[4]/div/div/form/li[1]/select')
        .pause(1000)
        // .waitForElementVisible('', [3500])
        // .waitForElementVisible('', [3500])
        // .waitForElementVisible('', [3500])
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[1]/select/option[2]', 'Home')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[1]/select/option[3]', 'City')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[1]/select/option[4]', 'Place')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[1]/select/option[5]', 'Listing')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[1]/select/option[6]', 'Article')
        .click('/html/body/div[1]/div[4]/div/div/form/li[1]/select/option[6]')
        .pause(1000)
        .setValue('/html/body/div[1]/div[4]/div/div/form/li[2]/input', slug)
        .pause(1000)
        .setValue('/html/body/div[1]/div[4]/div/div/form/li[4]/input', address)
        .pause(1000)
        .click('/html/body/div[2]/div[2]')
        .pause(1000)
        .click('/html/body/div[1]/div[4]/div/div/form/li[5]/select')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[5]/select/option[2]', '<root>')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[5]/select/option[4]', 'boston')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[5]/select/option[5]', 'chicago')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[5]/select/option[6]', 'cine')
        .assert.containsText('/html/body/div[1]/div[4]/div/div/form/li[5]/select/option[10]', 'harbourfront')
        .pause(2000)
        .click('/html/body/div[1]/div[4]/div/div/form/li[5]/select/option[2]')
        .pause(2000)
        .setValue('/html/body/div[1]/div[4]/div/div/form/li[6]/input', image)
        // .pause(1000)
        // .setValue('/html/body/div[1]/div[4]/div/div/form/li[7]/div/div/div[2]/div/table/tbody/tr[2]/td[3]/table/tbody/tr/td[4]/div', title)
        // .pause(1000)
        // .setValue('/html/body/div[1]/div[4]/div/div/form/li[6]/input', desc)
        // .pause(1000)
        // .setValue('/html/body/div[1]/div[4]/div/div/form/li[6]/input', keyword)
    // console.log(slug);
        .pause(200)
        .click('/html/body/div[1]/div[4]/div/div/form/fieldset[2]/ol/li[1]')
        .assert.containsText('/html/body/div/div[3]/div', 'Page was successfully created.')
        .assert.containsText('/html/body/div/div[2]/div[2]/div/span[1]/a', 'Edit Page')
        .assert.containsText('/html/body/div/div[2]/div[2]/div/span[2]/a', 'Delete Page');
        // .assert.containsText('', '')
});

Then(/^open test article$/, async () => {
    await browser
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .assert.containsText('', '')
        .assert.containsText('', '')
        .assert.containsText('', '')
});

Then(/^change section$/, async () => {
    await browser
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .assert.containsText('', '')
        .assert.containsText('', '')
        .assert.containsText('', '')
});

Then(/^check all elements on it$/, async () => {
    await browser
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .assert.containsText('', '')
        .assert.containsText('', '')
        .assert.containsText('', '')
});

Then(/^change section again$/, async () => {
    await browser
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .waitForElementVisible('', [3500])
        .assert.containsText('', '')
        .assert.containsText('', '')
        .assert.containsText('', '')
});

Then(/^logout from admin page$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div/div[1]/ul[2]/li[2]', [3500])
        .click('/html/body/div/div[1]/ul[2]/li[2]')
        .waitForElementVisible('/html/body/div/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div[1]/div[2]', [3500])
        .assert.containsText('/html/body/div/div[1]/div[2]/div/h2', 'Bagsaway Luggage Storage Login')
        .assert.containsText('/html/body/div/div[1]/div[2]/div/form/fieldset[1]/ol/li[1]/label', 'Email')
        .assert.containsText('/html/body/div/div[1]/div[2]/div/form/fieldset[1]/ol/li[2]/label', 'Password');
});
