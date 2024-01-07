export default class HomePage {
    #BASE_URL = 'https://duckduckgo.com/'

    #CSS_INPUT_SEARCH = '#searchbox_input'
    #CSS_BUTTON_SEARCH = '#searchbox_homepage button[type="submit"]'

    load() {
        return browser.url(this.#BASE_URL).waitForElementVisible('body', 1000)
    }

    fillSearch(text) {
        return browser.assert.visible(this.#CSS_INPUT_SEARCH).sendKeys(this.#CSS_INPUT_SEARCH, text)
    }

    search() {
        return browser.click(this.#CSS_BUTTON_SEARCH)
    }
}
