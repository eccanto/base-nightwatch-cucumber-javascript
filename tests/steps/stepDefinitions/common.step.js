const { Given } = require('@cucumber/cucumber')

Given('I see {string} in the title', (title) => {
  return browser.expect.title().to.contain(title)
})
