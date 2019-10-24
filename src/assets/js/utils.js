/**
 **    addCookie        添加一个cookie
 **    params
 **            name    [String]
 **            value    [String]
 **            iDay    [Number]
 */
function addCookie(name, value, iDay) {
    if (iDay) {
        //设置过期时间
        const oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + '; PATH=/; EXPIRES=' + oDate.toGMTString();
    } else {
        //默认不设置过期时间
        document.cookie = name + '=' + value + '; PATH=/';
    }
}

/**
 **    getCookie        获取一个cookie
 **    @name        [String]
 */
function getCookie(name) {
    //name=李四; age=18; sex=男; weight=50
    const arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i++) {
        const arr2 = arr[i].split('=');
        if (arr2[0] === name) {
            return arr2[1];
        }
    }
}

/**
 **    removeCookie        删除一个cookie
 **    name        [String]
 **
 */
function removeCookie(name) {
    addCookie(name, 1, -1);
}

function toJSON(data) {
    return JSON.parse(JSON.stringify(data));
}

/**
 * vue的方法
 * */
// const vueMethods = (function (fn, w) {
//     return fn(w)
// }(function (w) {
//     return {
//
//     }
// }, window));
const vueMethods = {
    goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    treeShakingTestFn() {
        console.log('treeShakingTestFn');
    }
};
export {
    getCookie,
    addCookie,
    removeCookie,
    toJSON,
    vueMethods
}