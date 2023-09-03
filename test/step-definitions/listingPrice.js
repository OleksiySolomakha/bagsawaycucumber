const {Given, Then, When, Before} = require('@cucumber/cucumber');


Then(/^write location in search field: "(.*?)"$/, async (tor) => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div[1]')
        .pause(1000)
        //clear field
        .click('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/div/div[2]/button')
        .setValue('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/div/input', tor)
        .pause(1000)
        .setValue('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/div/input', 'ON,Canada')
        .pause(1000)
        .click('/html/body/div[2]/div[3]/div/div/div/div[2]/ul/li[1]/div')
        .waitForElementVisible('/html/body/div/div/div[1]/div[1]/div',[3500])
        .waitForElementVisible('/html/body/div/div/div[1]/div[2]/button',[3500])
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[1]',[3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[2]',[3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]/div/div',[3500]);
});

Then(/^click at first location and check it$/, async () => {
    let status, priceMap, priceList;
    await browser
        .click('/html/body/div/div/div/div[3]/div/div[1]/div/div/div/div[1]/div[3]/div/div[3]/div[4]')
        .pause(1000);
    await browser.getText('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[2]/button/span[1]',
        result => status = result);
    if(status && status.value) {
        console.log('status', status.value);
        if (status.value === 'Book') {
            await browser.getText('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[1]',
                result => priceMap = result);
            await browser
                .click('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[2]/button')
                .pause(1000)
                .waitForElementVisible('/html/body/div/div/div/div/div[2]/div', [3500]);
            await browser.getText('/html/body/div/div/div/div/div[2]/div/table/tfoot/tr/td',
                result => priceList = result);
            if (priceMap && priceMap.value && priceList && priceList.value) {
                let mapPrice = priceMap.value;
                let listPrice = priceList.value;
                // if price like 8.00 list price looks like 8 ,it's bug, just search another listing
                let map = mapPrice.match(/\d+.\d+/g).join('');
                let list = listPrice.match(/\d+.\d+/g).join('');
                console.log('Map price: ', map);
                console.log('List price: ', list);
                console.log('priceMap.value', mapPrice);
                console.log('priceList.value', listPrice);
                await browser
                    .pause(1000)
                    .waitForElementVisible('/html/body/div/div/div/div/div[2]/ul/div[1]', [3500])
                    .waitForElementVisible('/html/body/div/div/div/div/div[2]/ul/div[2]', [3500])
                    .waitForElementVisible('/html/body/div/div/div/div/div[2]/div', [3500])
                    .assert.containsText('/html/body/div/div/div/div/div[2]/div/div[1]/div',
                        'Greyhound Canada Luggage Storage');
                if (map === list) {
                    await browser
                        .click('/html/body/div/div/div/div/div[1]/div[1]/button')
                        .pause(1000)
                        .waitForElementVisible('/html/body/div/div/div/div[1]/div', [3500])
                        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]/div/div', [3500]);
                } else {
                    console.log('We have different price at map ' + map + ' and listing ' + list);
                    await browser.waitForElementVisible('/html/body/div/div/div[10]/div[3]/div/div[3]/div/div', [3500]);
                }
            }
        } else {
            console.log('Listing is closed');
            await browser.waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]/button', [3500]);
        }
    }
});

Then(/^close Dates modal window$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/div/div[1]/div[1]/button')
        .pause(1000)
        .waitForElementVisible('/html/body/div/div/div[1]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div/div/div[1]/div[2]/button', [3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]/div/div', [3500]);
});

Then(/^click at second location and check it$/, async () => {
    let status, priceMap, priceList;
    await browser
        .click('/html/body/div/div/div/div[3]/div/div[1]/div/div/div/div[1]/div[3]/div/div[3]/div[5]')
        .pause(1000);
    await browser.getText('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[2]/button/span[1]',
        result => status = result);
    if(status && status.value) {
        console.log('status', status.value);
        if (status.value === 'Book') {
            await browser.getText('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[1]',
                result => priceMap = result);
            await browser
                .click('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[2]/button')
                .pause(1000)
                .waitForElementVisible('/html/body/div/div/div/div/div[2]/ul/div[1]', [3500])
                .waitForElementVisible('/html/body/div/div/div/div/div[2]/ul/div[2]', [3500])
                .waitForElementVisible('/html/body/div/div/div/div/div[2]/div', [3500]);
            await browser.getText('/html/body/div/div/div/div/div[2]/div/table/tfoot/tr/td',
                result => priceList = result);
            if (priceMap && priceMap.value) {
                if (priceList && priceList.value) {
                    let mapPrice = priceMap.value;
                    let listPrice = priceList.value;
                    let map = mapPrice.match(/\d+.\d+/g).join('');
                    let list = listPrice.match(/\d+.\d+/g).join('');
                    console.log('Map price: ', map);
                    console.log('List price: ', list);
                    console.log('priceMap.value', mapPrice);
                    console.log('priceList.value', listPrice);
                    await browser
                        .pause(1000)
                        .waitForElementVisible('/html/body/div/div/div/div/div[2]/ul/div[1]/div[2]/div/div[2]', [3500])
                        .waitForElementVisible('/html/body/div/div/div/div/div[2]/ul/div[2]/div[2]/div/div[2]', [3500])
                        .waitForElementVisible('/html/body/div/div/div/div/div[2]/div/div[1]/button', [3500])
                        .assert.containsText('/html/body/div/div/div/div/div[2]/div/div[1]/div',
                            'Luggage Storage near Queen West Shopping');
                    if (map === list) {
                        await browser
                            .click('/html/body/div/div/div/div/div[1]/div[1]/button')
                            .pause(1000)
                            .waitForElementVisible('/html/body/div/div/div/div[1]/div', [3500])
                            .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]/div/div', [3500]);
                    } else {
                        console.log('We have different price at map ' + map + ' and listing ' + list);
                        await browser.waitForElementVisible('/html/body/div/div/div[10]/div[3]/div/div[3]/div/div', [3500]);
                    }
                }
            } else {
                console.log('Listing is closed');
                await browser.waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]', [3500]);
            }
        }
    }
});

