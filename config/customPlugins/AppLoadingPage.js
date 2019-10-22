//  style
const styleString = `<style>
        #appLoading {
            width: 100%;
            height: 100%;
        }
        
        #appLoading span {
            position: absolute;
            display: block;
            font-size: 50px;
            line-height: 50px;
            top: 50%;
            left: 50%;
            width: 140px;
            height: 110px;
            -webkit-transform: translateY(-50%) translateX(-50%);
            transform: translateY(-50%) translateX(-50%);
        }
    </style>`;
//  html
const htmlString = `<div id="appLoading">
        <span>
            <img id="loading" src="http://www.hachismart.com/static/loading_a.gif" alt="logo">
        </span>
    </div>`;
module.exports = {
    styleString,
    htmlString,
};