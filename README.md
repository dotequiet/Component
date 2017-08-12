# Component
  audio
  
    use: audio = require('*/audio/_audio.js')
         _audio = new audio
         _audio.nextAudio(page)
  pageview
    
      use:  PageView = require('*/pageview/_page.js')
            new PageView(pageSize, pageNo, getAjaxCallBack)
