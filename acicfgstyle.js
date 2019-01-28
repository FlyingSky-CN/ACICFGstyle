/*
* ACICFG style
*
* Copyright (C) 2019 FlyingSky.
*/

/* 搞了半天 css 嵌入不进去，那就 js 吧，暴力点 */

/* Console Log */
console.log("\n %c ACICFG style %c v1.0 %c \n","color: #fff; background: #6cf; padding:5px 0; border: 1px solid #6cf;","color: #6cf; background: #fff; padding:5px 0; border: 1px solid #6cf;","");

/* Style Text */
var style = '.header-wrap{background: #444;min-width: 0px;height: 47px;}.scbox input{height: 24px;line-height: 24px;border: 0px;color: #ddd;background-color: #444;border-radius: 0px;margin:2px;}.logo {font-size: 20px;line-height: 20px;font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", sans-serif;padding:12px 8px;}.logo a {color: #ccc;text-shadow:none;-webkit-transition:none;}.main-wrap {min-height: 0;height: auto!important;width: 100%;min-width: 0;background: none;padding: 20px 0;}.sider-box {border: 0px;background: #fafafa;}.sider-box-title{border-bottom: 0px; margin-bottom: 10px;padding: 14px;color: #666;font-size: 14px;background:#eee;box-shadow:none;}.sider-box-content{padding-bottom: 4px;}.footer-wrap{margin-bottom: 0px;}.footer{margin-left: 20px;margin-right: 20px;}.title {border-bottom: 0px; margin-bottom: 0px;padding: 14px 14px;color: #666;font-size: 14px;background:#eee;box-shadow:none;}.post-list,.commont-item{padding-top:10px;margin-bottom: 0px;border-bottom: 1px solid #eee;background:#fafafa;}.home-box-list{padding-top: 0px;}.main-box{background: #fafafa;!important}.sl,.ml{box-shadow:none;}.banner img{width:20px;}.footer{width: 960px;vertical-align: middle;margin: 0 auto;}.textbtn,td input{background:#fff;padding: 5px;border: 1px solid #ccc;border-radius: 4px;}.fs14 {font-size: 14px;line-height: 14px;}.newpostbtn {font-size: 12px;line-height: 12px;padding: 1px 5px;border: 0px ;background: none;}';
var change = "<style>"+style+'</style><input type="text" maxlength="30" placeholder="站内搜索" name="q" id="q">'

/* Change! */
document.getElementById("searchform").innerHTML=change;