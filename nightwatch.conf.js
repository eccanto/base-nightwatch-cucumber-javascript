const geckodriver = require('geckodriver');

module.exports = {
    src_folders: ['tests'],

    selenium: {
        start_process: true,
        port: 4444,
        server_path: geckodriver.path
    },

    test_settings: {
        default: {
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities: {
                browserName: 'firefox',
                alwaysMatch: {
                    'moz:firefoxOptions': {
                        args: [
                            '-headless'
                        ]
                    }
                }
            },
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: './screenshots/'
            }
        }
    }
};
