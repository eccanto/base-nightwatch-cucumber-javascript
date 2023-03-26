const chromedriver = require('chromedriver')

module.exports = {
  output_folder: false,  // Nightwatch reporters are not available for cucumber-js: https://nightwatchjs.org/guide/writing-tests/using-cucumberjs.html#reporting

  src_folders: ['features/step_definitions'],

  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: 'features/specs/*.feature'
    }
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['headless']
        }
      },
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      }
    }
  }
}
