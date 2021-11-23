const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

Given(/^I go to the Ecosia page$/, () => {
    return client.url('https://www.ecosia.org/').waitForElementVisible('body', 1000);
});

Given(/^I fill the search input with the "([^"]*)" term on the Ecosia page$/, (text) => {
    return client
        .assert.visible('input[type=search]')
        .sendKeys('input[type=search]', text);
});

When(/^I click on the search button on the Ecosia page$/, () => {
    return client.click('button[type=submit]');
});

Then(/^the text "([^"]*)" should be visible on the result page on the Ecosia page$/, (text) => {
    return client
        .assert.visible({ selector: '.mainline', timeout: 20000 })
        .assert.containsText('.mainline', text);
});
