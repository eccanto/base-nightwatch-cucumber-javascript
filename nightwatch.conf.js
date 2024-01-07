require('@babel/register')()

const chromedriver = require('chromedriver')

module.exports = {
    src_folders: ['tests'],
    page_objects_path: [],
    custom_commands_path: [],
    custom_assertions_path: [],
    plugins: [],
    globals_path: '',
    webdriver: {},
    test_workers: {
        enabled: true
    },
    test_settings: {
        default: {
            disable_error_log: false,
            launch_url: 'http://localhost',
            screenshots: {
                enabled: false,
                path: 'screens',
                on_failure: true
            },
            desiredCapabilities: {
                browserName: 'chrome'
            },
            webdriver: {
                start_process: true,
                server_path: ''
            },
            test_runner: {
                type: 'cucumber',
                options: {
                    feature_path: 'tests/features',
                    parallel: 2,
                }
            }
        },
        chrome: {
        desiredCapabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                w3c: true,
                args: [
                    //'--headless'
                ]
            }
        },
        webdriver: {
            start_process: true,
            server_path: chromedriver.path,
            cli_args: [
            // --verbose
            ]
        }
        },
    },
}
