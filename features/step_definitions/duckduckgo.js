const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

Given(/^I go to the Duckduckgo page$/, () => {
    return client.url('https://duckduckgo.com/').waitForElementVisible('body', 1000);
});

Given(/^I fill the search input with the "([^"]*)" term on the Duckduckgo page$/, (text) => {
    return client
        .assert.visible('#search_form_input_homepage')
        .sendKeys('#search_form_input_homepage', text);
});

When(/^I click on the search button on the Duckduckgo page$/, () => {
    return client.click('#search_button_homepage');
});

Then(/^the text "([^"]*)" should be visible on the result page on the Duckduckgo page$/, (text) => {
    return client
        .assert.visible({ selector: '#links', timeout: 20000 })
        .assert.containsText('#links', text);
});
