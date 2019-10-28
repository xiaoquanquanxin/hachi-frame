const __src = '../../src/web';
const {resolve} = require('path');
console.log('加载了postcss🍊🍊🍊🍊🍊🍊🍊🍊');
const postCssConfig = {
    sourceMap: true,
    ident: 'postcss',
    plugins: [
        require('postcss-import')({
            resolve(_path) {
                console.log( `postcss路径：🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉${_path}`);
                _path = _path.replace('~@aliasAssets', resolve(__dirname, `${__src}/assets`));
                return _path;
            }
        }),
        require("postcss-preset-env")({
            stage: -1,
            autoprefixer: {
                //  主要是android和ios的版本，别改这里
                overrideBrowserslist: [
                    'Chrome > 31',
                    'ff > 31',
                    'ie >= 8',
                ],
            }
        }),
    ],
};
module.exports = postCssConfig;
// @import "~@aliasCss/configuration/colorConfig.css";

// {"postcss-import": "^12.0.1",
//     "postcss-loader": "^3.0.0",
//     "postcss-preset-env": "^6.7.0",}