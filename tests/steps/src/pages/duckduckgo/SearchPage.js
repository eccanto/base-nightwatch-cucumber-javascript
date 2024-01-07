import { expect } from '@nightwatch/chai'

export default class SearchPage {
    #CSS_RESULT_SEARCH = '#react-layout [data-testid="mainline"]'

    async resultContain(text) {
        await browser.getText({ selector: this.#CSS_RESULT_SEARCH, timeout: 20000 }, function (result) {
            expect(result.value).contains(text)
        })
    }
}
