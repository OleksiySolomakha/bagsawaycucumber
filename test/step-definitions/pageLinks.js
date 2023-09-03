const {Given, Then, When, Before} = require('@cucumber/cucumber');

Given(/^open Home page$/,async () => {
    await browser
        .useXpath()
        .url('https://test123.bagsawaygo.com/')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/button',[3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/div[1]/div',[3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[3]/section[1]/h1',
            'Where can I store my luggage near me?')
        .assert.containsText('/html/body/div/div/div[1]/div[3]/section[2]/h2',
            'How to store your luggage with BagsAway?')
        .assert.containsText('/html/body/div/div/div[1]/div[3]/section[3]/h3', 'Why store your luggage with BagsAway');
});

Then(/^check search for landing$/, async () => {
    await browser
        .click('/html/body/div/div/div[1]/div[2]/div[1]/div/div/input')
        .pause(1000)
        .setValue('/html/body/div[2]/div[3]/div/div/div/div[1]/div/input', 'New York,')
        .pause(1000)
        .setValue('/html/body/div[2]/div[3]/div/div/div/div[1]/div/input','NY,')
        .click('/html/body/div[2]/div[3]/div/div/div/div[2]/ul/li[1]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div', [3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[1]/div/div/div/button', 'Now');
});

Then(/^click at links$/, async () => {
    await browser
        .click('/html/body/div/div/div[1]/footer/div/div[3]/p[3]/a')
        .pause(2000)
        .click('//*[@id="root"]/div/div[1]/div[3]/section[5]/div[1]/div/div/div[5]/div/div')
        .pause(2000)
        .click('/html/body/div/div/div[1]/div/div[1]/button')
        .pause(2000)
        .waitForElementVisible('/html/body/div/div/div[1]/div[1]/div', [3500])
        .assert.containsText('/html/body/div/div/div[1]/div[3]/div/div[3]/div/div/span',
            'Click to View 42 Locations in Toronto')
        .url('https://test123.bagsawaygo.com/luggage-storage/toronto')
        .waitForElementVisible('/html/body/div/div/div[1]/div[3]/section[9]/div', [3500])
        // Union station toronto
        .click('/html/body/div/div/div[1]/div[3]/section[7]/div/p[2]/a')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/div[1]/div[1]/div[1]/div/button', [3500])
        .waitForElementVisible('/html/body/div/div/div[1]/div[2]/div[1]', [3500])
        .assert.containsText('/html/body/div/div/div[1]/div[2]/div[1]/div/div/div[2]/div/button/div/span',
            'Show Bag Drop Locations')
        .assert.containsText('/html/body/div/div/div[1]/div[3]/section[1]/h1',
            'Where can I store luggage at Union Station in Toronto?')
        // Partners
        .click('/html/body/div/div/div[1]/div[3]/section[12]/div/a')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/div[1]/div[2]', [3500])
        .assert.containsText('/html/body/div/div/div[1]/div[3]/button/span[1]',
            'CLICK TO JOIN TODAY!')
        .url('https://test123.bagsawaygo.com/')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/div[1]/div[1]', [3500])
        .assert.containsText('/html/body/div/div/div[1]/div[3]/section[1]/h1',
            'Where can I store my luggage near me?');
});

// Then(/^click Kyiv$/, async () => {
//     await browser
//         .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/button',[3500])
//         .waitForElementVisible('/html/body/div[1]/div/div[1]/div[3]/section[5]',[3500])
//         .assert.containsText('/html/body/div[1]/div/div[1]/footer/div/div[1]/p', 'Luggage Storage in Kyiv')
//         .assert.containsText('/html/body/div[1]/div/div[1]/footer/div/div[2]/p', 'Luggage Storage in Toronto')
//         .click('/html/body/div[1]/div/div[1]/footer/div/div[1]/p/a')
//         .waitForElementVisible('',[3500]);
// });




Then(/^$/, async () => {});
