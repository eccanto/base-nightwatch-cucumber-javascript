const { client } = require('nightwatch-api');
const { Given } = require('@cucumber/cucumber');

Given('I see {string} in the title', (title) => {
    return client.expect.title().to.contain(title);
});
