const { Given, Then, When } = require('@cucumber/cucumber')
const { expect } = require('@nightwatch/chai')

const DuckDuckGoPage = require('../src/pages/duckduckgo/DuckduckgoPage')

Given('I go to the Duckduckgo page', () => {
  this.page = new DuckDuckGoPage()
  return this.page.load()
})

Given('I fill the search input with the {string} term on the Search Engine page', (text) => {
  return this.page.fillSearch(text)
})

When('I click on the search button on the Search Engine page', () => {
  return this.page.search()
})

Then('the text {string} should be visible on the result page on the Search Engine page', async (text) => {
  const elemText = await this.page.resultText()
  expect(elemText).contains(text)
})
