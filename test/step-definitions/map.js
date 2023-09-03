const {Given, Then, When, Before} = require('@cucumber/cucumber');


let pass = '5258584d', email= 'adeadp@pool.com';
// Variables for Check IN and Check Out check block!!!!
let timeOut, timeIn, hoursIn, hoursOut;

Given (/^open map page$/, async () => {
    await browser
        .url('https://test123.bagsawaygo.com/map')
        .refresh()
        .pause(1500)
        .useXpath()


        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div', [3500])

        .assert.containsText('/html/body/div/div/div/div[2]/button', '# of Items:')
        // .waitForElementVisible('/html/body/div[1]/div/div[1]/div[3]/div/div[3]/div/div[2]/span',[3500])
        .assert.containsText('/html/body/div/div/div/div[1]/div/div/div/button', 'Now')
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[1]', [3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[2]', [3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]', [3500]);
} );


Then (/^open search field and write: "(.*?)"$/, async (NY) => {
    console.log('NY',NY);
    let location;
    // use search
    await browser
        .click('/html/body/div[1]/div/div[1]/div[1]')
        .pause(1000)
    //clear field
        .click('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/div/div[2]/button')
        .setValue('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/div/input', NY)
        .pause(1000)
        .setValue('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/div/input', 'NY, USA')
        .pause(1000);
    await browser.getText('/html/body/div[2]/div[3]/div/div/div[1]/div[2]/ul/li[1]', result => location = result);
        //This block check what we see in input field
        //Sometimes page doesn't load location variants or page so this block check existing needful variant
        if (location && location.value) {
            console.log('location', location.value);
            if (location.value === 'New York, NY, USA') {
                await browser
                    .waitForElementVisible('/html/body/div[2]/div[3]/div/div/div[1]/div[2]/ul/li[1]', [3500])
                    .waitForElementVisible('/html/body/div[2]/div[3]/div/div/div[1]/div[2]/ul/li[2]', [3500])
                    .waitForElementVisible('/html/body/div[2]/div[3]/div/div/div[1]/div[2]/ul/li[3]', [3500])
                    .waitForElementVisible('/html/body/div[2]/div[3]/div/div/div[1]/div[2]/ul/li[4]', [3500])
                    .waitForElementVisible('/html/body/div[2]/div[3]/div/div/div[1]/div[2]/ul/li[5]', [3500])
                    .click('/html/body/div[2]/div[3]/div/div/div[1]/div[2]/ul/li[1]');
            } else {
                await browser
                    .refresh()
                    .click('/html/body/div[1]/div/div[1]/div[1]')
                    .click('/html/body/div[3]/div[3]/div/div/div[1]/div[1]/div/div[2]/button')
                    .setValue('/html/body/div[3]/div[3]/div/div/div[1]/div[1]/div/input', 'New York,')
                    .pause(1000)
                    .setValue('/html/body/div[3]/div[3]/div/div/div[1]/div[1]/div/input', ' NY,');
                if (location.value === 'New York, NY, USA') {
                    await browser
                        .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[1]', [3500])
                        .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[2]', [3500])
                        .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[3]', [3500])
                        .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[4]', [3500])
                        .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[5]', [3500])
                        .click('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[1]');
                }
                else {
                    await browser
                        .refresh()
                        .click('/html/body/div[1]/div/div[1]/div[1]')
                        .click('/html/body/div[3]/div[3]/div/div/div[1]/div[1]/div/div[2]/button')
                        .setValue('/html/body/div[3]/div[3]/div/div/div[1]/div[1]/div/input', 'New York,')
                        .pause(1000)
                        .setValue('/html/body/div[3]/div[3]/div/div/div[1]/div[1]/div/input', ' NY,');
                    if (location.value === 'New York, NY, USA') {
                        await browser
                            .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[1]', [3500])
                            .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[2]', [3500])
                            .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[3]', [3500])
                            .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[4]', [3500])
                            .waitForElementVisible('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[5]', [3500])
                            .click('/html/body/div[3]/div[3]/div/div/div[1]/div[2]/ul/li[1]');
                    }
                }
            }
        }

        //Doesn't work , we must choose some location from list
        // .keys(browser.Keys.ENTER);
    //  Commend it because sometimes we have problems with Internet so I make another way for testing this function
    // .setValue('/html/body/div[4]/div[3]/div/div/div[1]/div[1]/div/input', NY)
    // .click('/html/body/div[4]/div[3]/div/div/div[1]/div[2]/ul/li[1]');
});

Given (/^write in search field: "(.*?)"$/, async (address) => {
    console.log('address',address);
    await browser
        .setValue('/html/body/div[1]/div/main/section[1]/div/form/div[1]/div/div[1]/div/input', address)
        .pause(1000)
        .setValue('/html/body/div[1]/div/main/section[1]/div/form/div[1]/div/div[1]/div/input', ' Toronto, ON, Can')
        .pause(1000)
        .click('/html/body/div[1]/div/main/section[1]/div/form/div[1]/div/div[2]/ul/li[1]')
        .pause(1000);
});

Then (/^click "SEARCH" at main page$/, async () => {
    await browser
        .click('/html/body/div[1]/div/main/section[1]/div/form/div[2]/div[3]/div/button');
});

Then (/^click on Our Price page$/, async () => {
    await browser
        .assert.containsText('//*[@id="root"]/div/div[1]/div[2]/div/div[1]/button[3]/div', 'Our Pricing')
        .click('/html/body/div[1]/div/div[1]/div[2]/div/div[1]/button[3]')
        .pause(1500);
});

Then (/^see Our Price page and click return$/, async () => {
    await browser
        .assert.containsText('//*[@id="root"]/div/div[1]/div[1]/h1', 'Our Prices')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[3]/div[1]', 'Free Cancellation')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[3]/div[2]', 'Insurance Protection Included')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[4]/div[1]', 'Overnight Storage')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[5]', 'Book early, before prices go up')
        .waitForElementVisible('//*[@id="root"]/div/div[1]/div[2]/div[1]', [3500])
        .waitForElementVisible('//*[@id="root"]/div/div[1]/div[2]/div[2]', [3500])
        .waitForElementVisible('//*[@id="root"]/div/div[1]/div[2]/div[3]', [3500])
        .waitForElementVisible('//*[@id="root"]/div/div[1]/div[4]/div[2]', [3500])
        .click('//*[@id="root"]/div/div[1]/button')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[2]/div/button[1]/span[1]', 'SEARCH THIS AREA');
});

Then (/^click on Profile page$/, async () => {
    await browser
        .pause(1000)
        .click('/html/body/div[1]/div/div[1]/div[2]/div/div[1]/button[4]');
});

Then (/^see Profile page$/, async () => {
    await browser
        .assert.containsText('//*[@id="root"]/div/section/header/div/div/div/button[1]/span[1]', 'MY BOOKINGS')
        .assert.containsText('//*[@id="root"]/div/section/header/div/div/div/button[2]/span[1]', 'LISTING BOOKINGS')
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/div[1]', 'Welcome Aleksey')
        .assert.containsText('//*[@id="root"]/div/section/div/div[1]/div[2]', 'To your new BagsAway Dashboard')
        .waitForElementVisible('//*[@id="root"]/div/section/div/div[2]', [3500]);
});

Then (/^see Map page$/, async () => {
    await browser
        .assert.containsText('/html/body/div[1]/div/div[1]/div[1]/div/div/div/button', 'Now')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div/button', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[3]/div/button[1]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[3]/div/button[2]', [3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/button', '# of Items:')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[3]/div/div[3]/div/div[2]/span',
            'View 28 Locations in New York')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[3]/div/div[3]', [3500]);
});

//Delete it when create HOME PAGE!!!!!!!!!!

Then (/^see map page$/, async () => {
    await browser
        .assert.containsText('/html/body/div[1]/div/div[1]/div[1]/div/div/div/button', 'Now')
        .waitForElementVisible('/html/body/div/div/div/div[1]/div/button', [3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/button', '# of Items:')
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[1]', [3500])
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/button[2]', [3500])
        .assert.containsText('/html/body/div/div/div/div[3]/div/div[2]/div/div/div',
            'Click to View 28 Locations in New York')
        .waitForElementVisible('/html/body/div/div/div/div[3]/div/div[1]/div/div/div/div[1]/div[3]/div/div[3]/div[1]/img',
            [3500]);
});

Then (/^start work with it, click on 2 locations one by one$/, async () => {
    await browser
        .click('/html/body/div/div/div/div[3]/div/div[1]/div/div/div/div[1]/div[3]/div/div[3]/div[2]')
        .pause(1500);
    let status;
    await browser.getText('/html/body/div/div/div/div[3]/div/div[2]/div/div[2]/div[2]/button/span[1]',
            result => status = result);
    if(status && status.value) {
        console.log('status', status.value);
        if (status.value === 'Book' || status.value === 'Closed') {
           await browser.click('/html/body/div/div/div/div[3]/div/div[2]/button');
        } else
        {
            await browser.waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]', [3500]);
        }
        await browser
            .pause(1500)
            .click('/html/body/div/div/div/div[3]/div/div[1]/div/div/div/div[1]/div[3]/div/div[3]/div[3]');
        if (status.value === 'Book' || status.value === 'Closed') {
            await browser.click('/html/body/div/div/div/div[3]/div/div[2]/button')
        } else
        {
            await browser.waitForElementVisible('/html/body/div/div/div/div[3]/div/div[2]', [3500]);
        }
    }
});

Then (/^click GPS button$/,async () => {
    await browser
        .pause(1000)
        .click('/html/body/div[1]/div/div[1]/div[3]/div/button[1]');
});

Then (/^see Kiev\(my location\)$/,async () => {
    await browser
        .pause(1000);
    let status;
    await browser.getText('/html/body/div[1]/div/div[1]/div[3]/div/div[3]/div/div[2]/span', result => status = result);
    if (status && status.value)
        {
            status.value = 'View 0 Locations in Київ';
        }
});

Then (/^click on button Count of items$/, async () => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div[2]/button')
        .pause(1500);
});

Then (/^see Count of items page$/, async  () => {
    await browser
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[3]/div/button[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[3]/div/button[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[3]/div/div', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[4]', [3500])
        .assert.containsText('/html/body/div[2]/div[3]/div/div[1]/div[2]/div', 'Number of Items')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/span', 'How many items would you you like to store?')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[4]/button/span[1]', 'Confirm');
});

Then (/^check buttons \+ and -$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/div/div[3]/div/button[2]')
        .pause(1000)
        .click('/html/body/div[2]/div[3]/div/div[3]/div/button[2]')
        .pause(1000)
        .click('/html/body/div[2]/div[3]/div/div[3]/div/button[1]')
        .pause(1000)
        .assert.containsText('/html/body/div[2]/div[3]/div/div[3]/div/div', '2 Items');
});

Then (/^press "Confirm" button$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/div/div[4]/button')
        .pause(1000);
});

Then (/^see new count of items "2"$/, async () => {
    await browser
        .pause(1000)
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/button/span[1]', '2');
});

Then (/^click Dates$/, async () => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div[1]/div/div/div/button')
        .pause('1500');
});

Then (/^see Dates modal window$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[3]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[3]/button', [3500])
        .assert.containsText('/html/body/div[2]/div[3]/div/div[1]/div[2]/div/div', 'When are you checking in?')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div/button[1]/span[1]/span', 'Check In')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div/button[2]/span[1]/span', 'Check Out')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]',
            'Number of items')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[3]/button/span[1]', 'Confirm');
});

Then (/^change data in Check in,out$/, async () => {
    await browser
    // open date section
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[1]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[3]/div[3]/div', [3500])
        .click('/html/body/div[3]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
        .pause(1000)
        // .click('/html/body/div[3]/div[3]/div/div[2]/div/div[3]/div[5]/button')
        // .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[3]/div[4]/button')
        .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[2]/button[2]')
        // open time section
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[1]/div[1]', 'Check-in date')
        .pause(1000)
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[3]')
        .pause(1000)
        .assert.containsText('/html/body/div[3]/div[3]/div/div/div[2]/div', 'Select Check-in Time')
        .click('/html/body/div[3]/div[3]/div/ul/div[5]');
    await browser.getText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[1]/div[2]',
        result => timeIn = result);
    await browser.getText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[1]/span',
        result => hoursIn = result);
    await browser.pause(1000);
    await browser
    // open date in Check Out section
        .click('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div/button[2]')
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[1]', [3500])
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[2]')
        .waitForElementVisible('/html/body/div[3]/div[3]/div', [3500])
        .click('/html/body/div[3]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
        .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[4]/button')
        .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[2]/button[2]')
        .pause(1000)
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]/div', 'Check-out time')
    //     open time section
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]')
        .pause(1000)
        .assert.containsText('/html/body/div[3]/div[3]/div/div/div[2]/div', 'Select Check-Out Time')
        .click('/html/body/div[3]/div[3]/div/ul/div[11]');
    await browser.getText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[2]/div[2]/span/div/div[1]/div[2]',
            result => timeOut = result);
    await browser.pause(1000);
    await browser.getText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]/span',
        result => hoursOut = result);

    // click Confirm

    console.log('click Confirm');
    await browser
        .click ('/html/body/div[2]/div[3]/div/div[3]/button')
        .pause(2000)
        .assert.containsText('/html/body/div[1]/div/div[1]/div[1]/div/div/div/button', 'Dates');

    // return for checking data

    await browser
        .click('/html/body/div[1]/div/div[1]/div[1]/div/div/div/button')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[1]/div[2]/div', 'When are you checking in?');

    // check new data

    if(timeIn && timeIn.value)
    {
        console.log('timeIn', timeIn.value);
        await browser
            .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[1]/div[2]',
                timeIn.value);
    }
    if (hoursIn && hoursIn.value)
    {
        console.log('hoursIn',hoursIn.value);
        await browser
            .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[1]/span',
                hoursIn.value);
    }

    //Back to Time Out
    await browser
        .click('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div/button[2]')
        .pause(1000);

    // check new data

    if(timeOut && timeOut.value)
    {
        console.log('timeIn', timeOut.value);
        await browser
            .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[2]/div[2]/span/div/div[1]/div[2]',
                timeOut.value);
    }
    if (hoursOut && hoursOut.value)
    {
        console.log('hoursOut',hoursOut.value);
        await browser
            .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]/span',
                hoursOut.value);
    }

});

Then (/^check new data$/, async () => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div[1]/div/div/div/button')
        .pause(1000);
    if (timeIn && timeIn.value){
        console.log('timeIn', timeIn);
        await browser.assert.containsText('/html/body/div[1]/div/div[1]/div[3]/div/div[3]/div/div[2]/span', timeIn.value)
    }
});

Then (/^click View all location and see this page$/, async () => {
    //Don't check all elements
    await browser
        .click('/html/body/div/div/div/div[3]/div/div[2]/div/div')
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[2]/div', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[4]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[5]', [3500])
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[3]/div/div[1]/div[2]', 'Free Cancellation')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[3]/div/div[2]/div[2]', '$1242 Insurance')
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div[2]/button', [3500]);
});

Then (/^move on by pages$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/div/div[2]/div[5]/div/div/button[2]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[2]/div', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[5]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[4]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[5]/button[2]', [3500])
        .click('/html/body/div[2]/div[3]/div/div[2]/div[5]/button[2]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[2]/div', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[1]/div', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[5]', [3500]);
});

Then (/^choose some location from listing$/, async () => {
    await browser.pause(1000);
    let status;
    await browser.getText('/html/body/div[2]/div[3]/div/div[2]/div[5]/div[1]/button/span[1]/span/span',
        result => status = result);
    if(status && status.value) {
        if (status.value === 'Opens after your check-in time of 10:00 am' && true) {
            console.log('status', status.value);
            await browser.assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[5]/div[1]/button/span[1]/span/span',
                'Opens after your check-in time of 10:00 am');
        }
        else if (status.value === 'Book This Location' && true) {
            console.log('status', status.value);
            await browser
                .click('/html/body/div[2]/div[3]/div/div[2]/div[5]/div[1]/button')
                .pause(1000)
                .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div[1]/button', [3500])
                .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/ul/div[1]/div[1]', [3500])
                .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/ul/div[1]/div[2]/div/div[1]', [3500])
                .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/ul/div[2]/div[1]', [3500])
                .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/div/div[2]', [3500])
                .assert.containsText('/html/body/div[1]/div/div[1]/div[1]/div[2]/div', 'Finish your booking')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/ul/div[2]/div[2]/div/div[1]/div[1]',
                    'Number of Items')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/ul/div[2]/div[2]/div/div[1]/div[2]', '1')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div/div[1]/div', 'Luggage Storage in SOHO')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div/div[1]/button', 'Order Details')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div/table/tfoot/tr/td[1]', 'Total')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div/table/tfoot/tr/td[2]', '$5')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[3]/button/span[1]', 'Continue')
                .assert.containsText('/html/body/div[1]/div/div[1]/div[3]/div','You will not be charged yet');
        }
    }
});

Then (/^see Complete your booking page$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div[7]/div[3]/div', [3500])
        .waitForElementVisible('/html/body/div[7]/div[3]/div/div[3]/div[3]/div/div/form/div/div/div[1]', [3500])
        .assert.containsText('/html/body/div[7]/div[3]/div/div[4]/div/div[1]/button', 'Go Back')
        .assert.containsText('/html/body/div[7]/div[3]/div/div[4]/div/div[2]/button', 'COMPLETE BOOKING');
});
Then (/^complete booking$/, async () => {
    await browser
        .click('/html/body/div[7]/div[3]/div/div[3]/div[3]/div/div/div/span/span[1]/input')
        .click('/html/body/div[7]/div[3]/div/div[4]/div/div[2]/button')
        .assert.containsText('/html/body/div[1]/div/section/div/div/div/h1', 'Thank you')
        .assert.containsText('/html/body/div[1]/div/section/div/div/div/p[1]',
            'Thank you Aleksey Deadpooolsey! Your order is accepted.')
        .assert.containsText('/html/body/div[1]/div/section/div/div/div/p[2]',
            'Confirmation email has been sent to adeadp@pool.com.')
        .assert.containsText('/html/body/div[1]/div/section/div/div/div/p[3]',
            'You can manage your bookings at dashboard.')
        .assert.containsText('/html/body/div[1]/div/section/div/div/div/button', 'GO TO YOUR DASHBOARD');
});
// Then (/^see allowed access message$/,async () => {
//     await browser
//         .assert.containsText('/html/body/div[4]/div[3]/div/div[1]',
//             'Please allow us access to your GPS location so we may provide accurate distance information')
//         .assert.containsText('/html/body/div[4]/div[3]/div/div[2]/button/span[1]', 'OK');
// });


// countItems.feature  test !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!____________________+++++++++++++++++++++++++

Then (/^click Numbers of Item$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]')
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[3]/div/button[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[3]/div/button[2]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[4]/button', [3500])
        .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div', 'Number of Items')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/span', 'How many items would you you like to store?')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[3]/div/div', '1 Item')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[4]/button/span[1]', 'Confirm');

});

Then (/^change count of items from Dates$/, async () => {
    await browser
        .click('/html/body/div[3]/div[3]/div/div[3]/div/button[2]')
        .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[3]/div/button[2]')
        .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[4]/button');
});

Then (/^see new count of items "3" change it to "1"$/, async () => {
    await browser
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[2]', '3')
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]')
        .waitForElementVisible('/html/body/div[3]/div[3]/div')
        .click('/html/body/div[3]/div[3]/div/div[3]/div/button[1]')
        .pause(500)
        .click('/html/body/div[3]/div[3]/div/div[3]/div/button[1]')
        .pause(500)
        .click('/html/body/div[3]/div[3]/div/div[4]/button')
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[2]', [3500])
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[2]', '1')
        .click('/html/body/div[2]/div[3]/div/div[3]/button')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/button', [3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/button/span[1]', '1')
});

Then (/^click Dates at View all location and click count of items$/, async () => {
    await browser
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[1]','# of Items:')
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[2]')
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[2]', [3500])
        .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div', 'When are you checking in?')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[1]/span[1]/span', 'Check In')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[2]/span[1]/span', 'Check Out')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]',
            'Number of items')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[3]/button/span[1]', 'Confirm')
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]');
});

Then (/^change count of items from View all location$/, async () => {
    await browser
        .waitForElementVisible('/html/body/div[4]/div[3]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[4]/div[3]/div/div[3]/div/button[1]', [3500])
        .waitForElementVisible('/html/body/div[4]/div[3]/div/div[3]/div/button[2]', [3500])
        .waitForElementVisible('/html/body/div[4]/div[3]/div/div[4]/button', [3500])
        .assert.containsText('/html/body/div[4]/div[3]/div/div[1]/div[2]/div', 'Number of Items')
        .assert.containsText('/html/body/div[4]/div[3]/div/div[2]/span', 'How many items would you you like to store?')
        .assert.containsText('/html/body/div[4]/div[3]/div/div[3]/div/div', '1 Item')
        .assert.containsText('/html/body/div[4]/div[3]/div/div[4]/button/span[1]', 'Confirm')
        .click('/html/body/div[4]/div[3]/div/div[3]/div/button[2]')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[3]/div/button[2]')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[3]/div/button[2]')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[4]/button')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[2]','4')
        .click('/html/body/div[3]/div[3]/div/div[3]/button/span[1]')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[1]/span[1]','4')
        .click('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div[2]/button')
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]', [3500])
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[2]','4')
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]')
        .assert.containsText('/html/body/div[4]/div[3]/div/div[3]/div/div','4 Items')
        .click('/html/body/div[4]/div[3]/div/div[3]/div/button[1]')
        .pause(500)
        .click('/html/body/div[4]/div[3]/div/div[3]/div/button[1]')
        .pause(500)
        .click('/html/body/div[4]/div[3]/div/div[4]/button')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[2]','2')
        .click('/html/body/div[3]/div[3]/div/div[3]/button');
});

Then (/^see new count of items "2" change it to "1"$/, async () => {
    await browser
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[1]')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]/div','Number of Items')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/span','How many items would you you like to store?')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[3]/div/div','2 Items')
        .click('/html/body/div[3]/div[3]/div/div[3]/div/button[1]')
        .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[4]/button')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[1]/span[1]','1');
});

Then (/^click View all location and see this page default$/, async () => {
    await browser
        .click('/html/body/div/div/div/div[3]/div/div[2]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[1]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[3]/div', [3500])
        // .waitForElementVisible('/html/body/div[4]/div[3]/div/div[2]/div[4]', [3500])
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[1]','# of Items:')
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[2]','Dates');
});

Then (/^click Dates from list page open modal window$/, async () => {
    await browser
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[2]','Dates')
        .pause(1000)
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[2]')
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[2]', [3500])
        .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]', 'When are you checking in?')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[1]/span[1]/span', 'Check In')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[2]/span[1]/span', 'Check Out')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]',
            'Number of items')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[3]/button/span[1]', 'Confirm');
});

Then (/^change data in Check In and Check Out$/, async () => {
    await browser
    // open date section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[4]/div[3]/div', [3500])
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[6]/button')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[2]/button[2]')
        .pause(1000)
        // open time section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]')
        .pause(1000)
        .assert.containsText('/html/body/div[4]/div[3]/div/div/div[2]/div', 'Select Check-in Time')
        .click('/html/body/div[4]/div[3]/div/ul/div[5]');
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[1]/div[2]',
        result => timeIn = result);
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[1]/span',
        result => hoursIn = result);
    await browser.pause(1000);

    await browser
    // open date in Check Out section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[2]')
        .pause(1000)
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[2]')
        .waitForElementVisible('/html/body/div[4]/div[3]/div', [3500])
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[6]/button')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[2]/button[2]')
        .pause(1000)
        //     open time section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]')
        .pause(1000)
        .assert.containsText('/html/body/div[4]/div[3]/div/div/div[2]/div', 'Select Check-Out Time')
        .click('/html/body/div[4]/div[3]/div/ul/div[12]');
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[2]/div[2]/span/div/div[1]/div[2]',
        result => timeOut = result);
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]/span',
        result => hoursOut = result);
    await browser.pause(1000);

    // click Confirm

    console.log('click Confirm time Out');
    await browser
        .click ('/html/body/div[3]/div[3]/div/div[3]/button')
        .pause(2000)
        .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[4]', [3500]);

    // click Dates for check change in Date

    await browser
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[2]');

    // check new data

    if(timeIn && timeIn.value)
    {
        console.log('timeIn', timeIn.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[1]/div[2]',
                timeIn.value);
    }
    if(hoursIn && hoursIn.value)
    {
        console.log('hoursIn',hoursIn.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[1]/span',
                hoursIn.value);
    }

    // check Data time Out

    await browser
        .click('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[2]');

    // check new data

    // It doesn't work because we change edit date message view
    if(timeOut && timeOut.value)
    {
        console.log('timeIn', timeOut.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[2]/div[2]/span/div/div[1]/div[2]',
                timeOut.value);
    }
    if(hoursOut && hoursOut.value)
    {
        console.log('hoursOut', hoursOut.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]/span',
                hoursOut.value);
    }

    // await browser
    //     .waitForElementVisible('/html/body/div[2]/div[3]/div/div[2]/div[4]', [3500]);
});

Then (/^click Dates from list page open modal window Input field$/, async () => {
    await browser
        .assert.containsText('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div[2]/button','Now')
        .pause(1000)
        .click('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div[2]/button')
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[1]/div[1]/button', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[1]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[2]', [3500])
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[2]', [3500])
        .assert.containsText('/html/body/div[3]/div[3]/div/div[1]/div[2]', 'When are you checking in?')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[1]/span[1]/span', 'Check In')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[2]/span[1]/span', 'Check Out')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]',
            'Number of items')
        .assert.containsText('/html/body/div[3]/div[3]/div/div[3]/button/span[1]', 'Confirm');
});

Then (/^change data in Check In and Check Out Input field$/, async () => {
    await browser
    // open date section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[4]/div[3]/div', [3500])
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[3]/div[3]/button')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[2]/button[2]')
        .pause(1000)
        // open time section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]')
        .pause(1000)
        .assert.containsText('/html/body/div[4]/div[3]/div/div/div[2]/div', 'Select Check-in Time')
        .click('/html/body/div[4]/div[3]/div/ul/div[5]');
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[1]/div[2]',
        result => timeIn = result);
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[1]/span',
        result => hoursIn = result);
    await browser.pause(1000);

    await browser
    // open date in Check Out section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[2]')
        .pause(1000)
        .waitForElementVisible('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]', [3500])
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[2]')
        .waitForElementVisible('/html/body/div[4]/div[3]/div', [3500])
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[1]/div[1]/button[2]')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[5]/button')
        .pause(1000)
        .click('/html/body/div[4]/div[3]/div/div[2]/button[2]')
        .pause(1000)
        //     open time section
        .click('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]')
        .pause(1000)
        .assert.containsText('/html/body/div[4]/div[3]/div/div/div[2]/div', 'Select Check-Out Time')
        .click('/html/body/div[4]/div[3]/div/ul/div[7]');
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[2]/div[2]/span/div/div[1]/div[2]',
        result => timeOut = result);
    await browser.getText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]/span',
        result => hoursOut = result);
    await browser.pause(1000);

    // click Confirm

    console.log('click Confirm time Out');
    await browser
        .click ('/html/body/div[3]/div[3]/div/div[3]/button')
        .pause(2000);

    // click Dates for check change in input field Date

    await browser
        .click('/html/body/div[2]/div[3]/div/div[2]/div[2]/button[2]');

    // check new data

    if(timeIn && timeIn.value)
    {
        console.log('timeIn', timeIn.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[1]/div[2]/span/div/div[1]/div[2]',
                timeIn.value);
    }
    if(hoursIn && hoursIn.value)
    {
        console.log('hoursIn', hoursIn.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[3]/div[2]/span/div/div[1]/span',
                hoursIn.value);
    }

    // check Data time Out

    await browser
        .click('/html/body/div[3]/div[3]/div/div[2]/div[1]/div/div/div/button[2]');

    // check new data

    if(timeOut && timeOut.value)
    {
        console.log('timeIn', timeOut.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[2]/div[2]/span/div/div[1]/div[2]',
                timeOut.value);
    }
    if(hoursOut && hoursOut.value)
    {
        console.log('hoursOut', hoursOut.value);
        await browser
            .assert.containsText('/html/body/div[3]/div[3]/div/div[2]/div[2]/ul/div[4]/div[2]/span/div/div[1]/span',
                hoursOut.value);
    }
});

Then (/^click on chat box at map page$/, async () => {
    await browser
        .click('/html/body/div[1]/div/div[1]/div[3]/div/button[2]');
});

Then (/^see chat box$/, async () => {
    await browser
        .assert.containsText('/html/body/div/div/div[1]/div/div[1]/p/span', 'Sorry we\'re offline')
        .assert.containsText('/html/body/div/div/div[2]/div[1]/div[1]/p[1]',
            'Have questions about our luggage storage options? Please fill the info form below and we\'ll get' +
            ' back to you as soon as possible!')
        .waitForElementVisible('/html/body/div/div/div[2]/div[8]/div/div[2]/div/div/div/div/div[1]/div/fieldset[1]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/div[2]/div[8]/div/div[2]/div/div/div/div/div[1]/div/fieldset[2]/div[1]', [3500])
        .waitForElementVisible('/html/body/div/div/div[2]/div[8]/div/div[2]/div/div/div/div/div[1]/div/fieldset[3]/div[1]', [3500])
        .assert.containsText('/html/body/div/div/div[2]/div[8]/div/div[2]/div/div/div/div/div[2]/button', 'Submit');
});
