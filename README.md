# react-dome
react+webpack做的一个鬼畜dome
原网站http://www.cybroadcast.cn/

`npm install`

`webpack`

直接用浏览器打开build/viwe/index.html可看到效果

## 关于第三方插件

在src/js/row9.js中引用了三个第三方插件，对插件做了小改动：

感觉这三个插件是一套，以aes.js为主体，其他两个应该是某方面的功能增加。

于是先在src/js/lib/aes.js结尾加了

`export default CryptoJS;`

然后

`webpack`

发现报错指向pad-zeropadding.js中CryptoJS未定义，果断在pad-zeropadding.js的开头加上

`import CryptoJS from './aes';`

在

`webpack`

没有报错了，也可以运行了，其中原因大概是这个插件不是按照commonjs风格写的，需要手动改一下的意思。
