const { client } = require('nightwatch-api');

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

    say() {
        throw new Error("Method 'say()' must be implemented.");
    }

    load() {
        return client.url(this._url).waitForElementVisible('body', 1000);
    }

    fillSearch(text) {
        return client
            .assert.visible(this._inputSearch)
            .sendKeys(this._inputSearch, text);
    }

    search() {
        return client.click(this._btnSearch);
    }

    async resultText() {
        let elemText;
        await client.getText({ selector: this._resultSearch, timeout: 20000 }, function (result) {
            elemText = result.value;
        });

        return elemText;
    }
}

module.exports = BaseSearchEngine;
