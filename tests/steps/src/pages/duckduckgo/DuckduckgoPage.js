class DuckduckgoPage {
  _url = 'https://duckduckgo.com/'

  _inputSearch = '#searchbox_input'
  _btnSearch = '#searchbox_homepage button[type="submit"]'
  _resultSearch = '#react-layout [data-testid="mainline"]'

  load() {
    return browser.url(this._url).waitForElementVisible('body', 1000)
  }

  fillSearch(text) {
    return browser.assert.visible(this._inputSearch).sendKeys(this._inputSearch, text)
  }

  search() {
    return browser.click(this._btnSearch)
  }

  async resultText() {
    let elemText
    await browser.getText({ selector: this._resultSearch, timeout: 20000 }, function (result) {
      elemText = result.value
    })

    return elemText
  }
}

module.exports = DuckduckgoPage
