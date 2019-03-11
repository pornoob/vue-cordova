const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    outputDir: 'www/',
    configureWebpack: {
        plugins: [
            new FileManagerPlugin({
                onEnd: {
                    copy: [
                        {
                            source: __dirname + '/public/static',
                            destination: __dirname + '/www/static/'
                        }
                    ]
                }
            }),
        ]
    }
}
