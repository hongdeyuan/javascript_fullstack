// http://nightwatchjs.org/gettingstarted#settings-file
// 具体的配置项可以去nightwatch的官网查看
//chormedriver 地址
//http://chromedriver.storage.googleapis.com/index.html
module.exports = {
    src_folders: ['specs'],
    output_folder: 'reports',
    custom_assertions_path: "",
    selenium: {
        start_process: true,
        server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.141.59.jar',  //设置selenium-server 的jar包路径
        host: '127.0.0.1',
        port: 9009,
        cli_args: {
            'webdriver.chrome.driver': './node_modules/chromedriver/lib/chromedriver/chromedriver' //设置chromedriver 的jar包路径
        }
    },
    test_settings: {
        default: {
            selenium_port: 9009,
            selenium_host: 'localhost',
            silent: true,
            globals: ""
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}