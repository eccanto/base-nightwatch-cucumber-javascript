const chromedriver = require('chromedriver');

module.exports = {
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
                browserName: 'chrome'
            },
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 4444,
                cli_args: ['--port=4444']
            }
        }
    }
};
