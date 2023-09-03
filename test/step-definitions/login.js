const {Given, Then, When, Before} = require('@cucumber/cucumber');

const email = 'adeadp@pool.com';
const password = '5258584d';

Given (/^open bagsaway login page and check all elements on the page$/, async () => {
    await browser
        .url('https://test123.bagsawaygo.com/')
        .pause(1500)
        .useXpath()
        .assert.containsText('//*[@id="root"]/div/main/header/div[2]/div/a[1]', 'Partner with us')
        .assert.containsText('//*[@id="root"]/div/main/header/div[2]/div/a[2]', 'Login');
});

Then (/^write email in Bags field$/, async () => {
	console.log('email', email);
    await browser
        .useXpath()
        .click('//*[@id="root"]/div/main/header/div[2]/div/a[2]')
		.pause(1000)
        .waitForElementVisible('//*[@id="email"]',6000)
        .setValue('/html/body/div[5]/div[3]/div/div[4]/div[1]/div[1]/div/input', email);
});


Then (/^write password in Bags field$/, async () => {
    console.log('password', password);
    await browser
        .useXpath()
        .pause(1000)
        .waitForElementVisible('//*[@id="password"]',6000)
        .setValue('/html/body/div[5]/div[3]/div/div[4]/div[2]/div[1]/div/input', password);
});

Then (/^press button Login and see main page Bags$/, async () => {
    await client
        .click('/html/body/div[5]/div[3]/div/div[5]/div/button')
        .pause(2500)
        .assert.containsText('//*[@id="root"]/div/main/header/div[2]/div/a[2]', 'My Bookings');
});

// DIFFERENT WAYS TO LOGOUT, WRITE ONLY IN THIS FILE!!!!!!!!!!!!!!

Then (/^press logout from main page$/, async () => {
	await client
		.click('/html/body/div[1]/div/main/header/div[2]/div/a[2]')
		.pause(1000)
		.click('/html/body/div[1]/div/header/div/div/button')
		.pause(1000)
		.click('/html/body/div[3]/div[3]/nav/button[4]')
		.assert.containsText('/html/body/div[1]/div/main/header/div[2]/div/a[2]', 'Login');
});

Given (/^open menu at map page$/, async () => {
	await client
		.click('//*[@id="root"]/div/div[1]/div[1]/div/div[8]/span')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[2]/div/div[1]/button[1]/div', 'Home')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[2]/div/div[1]/button[2]/div', 'Map/Locations')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[2]/div/div[1]/button[3]/div', 'Our Pricing')
        .assert.containsText('//*[@id="root"]/div/div[1]/div[2]/div/div[1]/button[4]/div', 'Profile')
		.pause(1000);
});

Then (/^return to main page$/, async () => {
	await client
		.url('https://test123.bagsawaygo.com/')
        .assert.containsText('//*[@id="root"]/div/main/header/div[2]/div/a[2]', 'My Bookings');
});

Then (/^logout after booking$/, async () => {
    await client
        .refresh()
        .click('/html/body/div[1]/div/header/div/div/button')
        .click('/html/body/div[3]/div[3]/nav/button[3]')
		.pause(1000)
        .assert.containsText('/html/body/div[1]/div/main/header/div[2]/div/a[2]', 'Login');
});

Then(/^logout from menu$/, async () => {
    let signIn;
    await client
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div/button', [3500])
        // .click('/html/body/div[1]/div/div[1]/div[1]/div/button')
        .pause(1000)
        .getText('/html/body/div[2]/div[3]/ul/div[3]/div',result => signIn = result);
    if( signIn && signIn.value ){
        console.log('signIn',signIn.value);
        if( signIn.value === 'Sign In'){
            await client
                .refresh()
                .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div',[5000]);
        }
        else if (signIn.value === 'Sign Out' ){
            await client
                .click('/html/body/div[2]/div[3]/ul/div[3]/div')
                .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/button',[3500])
                .pause(1000)
                .click('/html/body/div[1]/div/div[1]/div[1]/div/button')
                .assert.containsText('/html/body/div[2]/div[3]/ul/div[3]/div', 'Sign In');
        }
    }
});

Then(/^logout from dashboard menu$/, async () => {
    await client
        .click('/html/body/div[2]/div[3]/ul/div[2]')
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[1]/div[2]', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/div[2]/div', [3500])
        .waitForElementVisible('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[2]/button[1]', [3500])
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]/div/div/div/button[1]/span[1]','Login')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[1]/div/div/div/button[2]/span[1]', 'Sign Up')
        .assert.containsText('/html/body/div[1]/div/div[1]/div[2]/div[2]/div/form/div[2]/button[2]/span[1]',
            'Forgot Password?');
});
