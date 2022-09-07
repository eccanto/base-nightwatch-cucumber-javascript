/**
 * Abstract Class BaseSearchEngine.
 *
 * @class BaseSearchEngine
*/
class BaseSearchEngine {
    _url;

    _inputSearch;
    _btnSearch;
    _resultSearch;

    constructor() {
        if (this.constructor === BaseSearchEngine) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    load() {
        return browser.url(this._url).waitForElementVisible('body', 1000);
    }

    fillSearch(text) {
        return browser
            .assert.visible(this._inputSearch)
            .sendKeys(this._inputSearch, text);
    }

    search() {
        return browser.click(this._btnSearch);
    }

    async resultText() {
        let elemText;
        await browser.getText({ selector: this._resultSearch, timeout: 20000 }, function (result) {
            elemText = result.value;
        });

        return elemText;
    }
}

module.exports = BaseSearchEngine;
