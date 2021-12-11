/**
 * The step is done when the promise resolves or rejects. Every test case which uses Nightwatch
 * client should return the result of api call as it returns a Promise.
 *
 * docs:
 * - https://nightwatch-api.netlify.app/
 * - https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/step_definitions.md
*/
const { Given, Then, When } = require('@cucumber/cucumber');
const expect = require('chai').expect;

const EcosiaPage = require('./src/pages/ecosia');
const DuckDuckGoPage = require('./src/pages/duckduckgo');

Given('I go to the Ecosia page', () => {
    this.browser = new EcosiaPage();
    return this.browser.load();
});

Given('I go to the Duckduckgo page', () => {
    this.browser = new DuckDuckGoPage();
    return this.browser.load();
});

Given('I fill the search input with the {string} term on the Search Engine page', (text) => {
    return this.browser.fillSearch(text);
});

When('I click on the search button on the Search Engine page', () => {
    return this.browser.search();
});

Then('the text {string} should be visible on the result page ' +
     'on the Search Engine page', async (text) => {
    const elemText = await this.browser.resultText();
    expect(elemText).contains(text);
});
