import { Given, Then, When } from '@cucumber/cucumber'

import HomePage from '../../src/pages/duckduckgo/HomePage'
import SearchPage from '../../src/pages/duckduckgo/SearchPage'

Given('I go to the Duckduckgo page', function () {
    this.homePage = new HomePage()
    return this.homePage.load()
})

Given('I fill the search input with the {string} term on the Search Engine page', function (text) {
    return this.homePage.fillSearch(text)
})

When('I click on the search button on the Search Engine page', function () {
    return this.homePage.search()
})

Then('the text {string} should be visible on the result page on the Search Engine page', async function (text) {
    this.searchPage = new SearchPage()
    await this.searchPage.resultContain(text)
})
