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

const EcosiaPage = require('./pages/ecosia');
const DuckDuckGoPage = require('./pages/duckduckgo');

Given('I go to the Ecosia page', () => {
    this.page = new EcosiaPage();
    return this.page.load();
});

Given('I go to the Duckduckgo page', () => {
    this.page = new DuckDuckGoPage();
    return this.page.load();
});

Given('I fill the search input with the {string} term on the Search Engine page', (text) => {
    return this.page.fillSearch(text);
});

When('I click on the search button on the Search Engine page', () => {
    return this.page.search();
});

Then('the text {string} should be visible on the result page ' +
     'on the Search Engine page', async (text) => {
    const elemText = await this.page.resultText();
    expect(elemText).contains(text);
});
