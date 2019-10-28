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
 * 判断登录，仅返回登录状态，true、false
 * @return:boolean
 * */
function isUserLogin() {
    return !!(sessionStorage.getItem('user_info') && sessionStorage.getItem('user_token'));
}

/**
 * 设置登录状态
 * **/
function setUserLogin() {
    sessionStorage.setItem('user_info', '1');
    sessionStorage.setItem('user_token', '1');
    addCookie('user_login', '1', 86400000);
}


/**
 * vue的方法
 * */
//  返回前一页
function goBack(returnNo) {
    window.history.length > 1 ? this.$router.go(returnNo || -1) : this.$router.push('/');
}

export {
    getCookie,
    addCookie,
    removeCookie,
    toJSON,
    goBack,
    setUserLogin,
    isUserLogin,
}