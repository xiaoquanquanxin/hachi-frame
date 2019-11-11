//  style
const StyleString = `<style>
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

//  staticLocation
const StaticLocation = 'http://192.168.50.17:8081';
//  html
const HtmlString = `<div id="appLoading">
        <span>
            <img id="loading" src="${StaticLocation}/images/loading_a.gif" alt="logo">
        </span>
    </div>
<script src="${StaticLocation}/js/vue.min.js"></script>
<script src="${StaticLocation}/js/element-ui.js"></script>
`;
module.exports = {
    StyleString,
    HtmlString,
};