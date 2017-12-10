# Component
  audio
  
    use: audio = require('*/audio/_audio.js')
         _audio = new audio
         _audio.nextAudio(page)
  pageview
    
      use:  PageView = require('*/pageview/_page.js')
            new PageView(pageSize, pageNo, getAjaxCallBack)
  goole更新
  
      大家以后不要用document.body.scrollTop获取/设置页面滚动条的位置了。chrome 61开始不再支持了。改用  
      document.scrollingElement.scrollTop。所以兼容代码可以写成function bodyOrHtml() => {
        if ('scrollingElement' in document) {
          return document.scrollingElement;
        }
        if (navigator.userAgent.indexOf('WebKit') != -1) {
          return document.body;
        }
        return document.documentElement;
      }
      参考：
      1） https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/X64Sg16RhT4/6ZiW7Dt8CAAJ
      Chrome开发团队早就实现了，但是一直没开启。

      2）https://dev.opera.com/articles/fixing-the-scrolltop-bug/
      Opera的开发人员2015年提到过这个问题。最近也更新了就文章。
    
    闭包的概念
      闭包 是一个函数在运行过程中的一个动态环境，
      是一个运行期的、动态的概念。由于引擎对每个函数建立其独特的上下文环境，
      因此当函数被再次执行或者通过某种方法进入函数体内时，就可以得到闭包的全部信息。

