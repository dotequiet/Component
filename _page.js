/*
简历一个id为js-page的div引入jQuery与_page.js在页面new MetPage(总页数，当前页数，回调函数)
*/

var MetPage = function(pagecount, currentpage, fn) {
  if(currentpage <= pagecount ){
    this.init(pagecount, currentpage, fn)
  }else{
    alert('error set')
  }
}

MetPage.prototype = {
  init: function(pagecount, currentpage, fn) {
    //当前页
    this.currentPage = currentpage || 1
    //总页数
    this.pageCount = pagecount || 1
    //回调方法
    this.Fn = fn || function() {}
    //插入的分页
    this.itemContain = $('<div class="page">' +
                            '<span data-page="1" class="js-home first-page cursor-pointer hid">首页</span>' +
                            '<span class="js-pre pre-page cursor-pointer hid">上一页</span>' +
                            '<ul class="page-list"></ul>' +
                            '<span class="js-next next-page cursor-pointer">下一页</span>' +
                            '<span data-page="' + this.pageCount + '" class="js-end last-page cursor-pointer">尾页</span>' +
                            '<span class="skip-page">'+
                              '第<em class="current-page">9</em>页/共'+this.pageCount+'页 转到'+
                              '<input class="skip-page-val" type="text" value="10">页'+
                              '<span class="js-appoint-page goto-page">确定</span>'+
                            '</span>'+
                          '</div>')
    this.item = '<li class="js-page-jump"></li>'
    this.inserHtml = $('#js-page')
    this.creatPage()
    this.addEvent()
  },
  creatPage: function() {
    if(this.currentPage == 1){
      this.itemContain.find('.js-home').addClass('hid')
      this.itemContain.find('.js-pre').addClass('hid')
      this.itemContain.find('.js-end').removeClass('hid')
      this.itemContain.find('.js-next').removeClass('hid')
    }else if(this.currentPage == this.pageCount){
      this.itemContain.find('.js-end').addClass('hid')
      this.itemContain.find('.js-next').addClass('hid')
      this.itemContain.find('.js-pre').removeClass('hid')
      this.itemContain.find('.js-home').removeClass('hid')
    }else{
      this.itemContain.find('.js-end').removeClass('hid')
      this.itemContain.find('.js-pre').removeClass('hid')
      this.itemContain.find('.js-home').removeClass('hid')
      this.itemContain.find('.js-next').removeClass('hid')
    }
    //设置当前页和要跳转的下页
    this.itemContain.find('.current-page').text(this.currentPage)
    this.itemContain.find('input').val(this.currentPage)
    if (this.pageCount > 7) {
      this.createChangeDom()
    } else {
      this.createDom()
    }
    //设置当前页的hover状态
    $('li[data-page="'+this.currentPage+'"]').addClass('active')
  },
  //小于7个分页
  createDom: function() {
    var len = this.pageCount
    var current = this.currentPage
    for (var i = 0; i < len; i++) {
      var dom = $(this.item).clone()
      dom.attr('data-page', i + 1)
      dom.attr('data-positin', i)
      dom.text(i + 1)
      this.itemContain.find('ul').append(dom)
    }
    this.inserHtml.append(this.itemContain)
  },
  //大于7个分页
  createChangeDom: function() {
    var current = this.currentPage
    var lastPage = this.pageCount
    var pagePosition = 0
    //判断开始位置是否是从第一页展示
    if (current == 1 || (current - 2) < 1) {
      current = 1
      for (var i = 0; i < 5; i++) {
        var dom = $(this.item).clone()
        dom.addClass('cursor-pointer')
        dom.attr('data-page', i + 1)
        dom.attr('data-positin', pagePosition)
        dom.text(i + 1)
        this.itemContain.find('ul').append(dom)
        pagePosition++
      }
      this.itemContain.find('ul').append($(this.item).clone().text('...'))
      this.inserHtml.append(this.itemContain)
      //当前页等于最后一页或下一页加2以后大于最后一页
    } else if (current == lastPage || (current + 2) > lastPage) {
      current = lastPage
      this.itemContain.find('ul').append($(this.item).clone().text('...'));
      for (var i = current - 5; i < lastPage; i++) {
        var dom = $(this.item).clone()
        dom.addClass('cursor-pointer')
        dom.attr('data-page', i + 1)
        dom.attr('data-positin', pagePosition)
        dom.text(i + 1)
        this.itemContain.find('ul').append(dom)
        pagePosition++
      }
      this.inserHtml.append(this.itemContain)
    } else if ((current + 2) <= lastPage && (current - 2) >= 1) {
      current - 2 != 1 ? this.itemContain.find('ul').append($(this.item).clone().text('...')) : ''
      for (var i = current - 3; i < (current + 2); i++) {
        var dom = $(this.item).clone()
        dom.addClass('cursor-pointer')
        dom.attr('data-page', i + 1)
        dom.attr('data-positin', pagePosition)
        dom.text(i + 1)
        this.itemContain.find('ul').append(dom)
        pagePosition++
      }
      current + 2 != lastPage ? this.itemContain.find('ul').append($(this.item).clone().text('...')) : ''
      this.inserHtml.append(this.itemContain)
    }
  },
  addEvent:function(){
    var t = this
    //根据页数跳转
    $('.page-list').on('click',function(ev){
      var ev = ev.target
      t.judgePage(ev)
    })
    //下一页
    $('.js-next').on('click',function(ev){
      var ev = ev.target
      t.nextPage(ev)
    })
    //上一页
    $('.js-pre').on('click',function(ev){
      var ev = ev.target
      t.prePage(ev)
    })
    //跳到首页
    $('.js-home').on('click',function(ev){
      var ev = ev.target
      t.homePage(ev)
    })
    //跳到尾页
    $('.js-end').on('click',function(ev){
      var ev = ev.target
      t.endPage(ev)
    })
    //跳转到指定页
    $('.js-appoint-page').on('click',function(ev){
      var ev = ev.target
      t.appointPage(ev)
    })
  },
  appointPage:function(){
    this.currentPage = $('.skip-page-val').val()/1
    this.inserHtml.find('.page-list').html('')
    this.creatPage()
    this.Fn(this.currentPage)
  },
  nextPage:function(){
    if((this.currentPage+1) <= this.pageCount){
      this.currentPage++
      this.inserHtml.find('.page-list').html('')
      this.creatPage()
      this.Fn(this.currentPage)
    }
  },
  prePage:function(){
    if((this.currentPage-1) > 0){
      this.currentPage--
      this.inserHtml.find('.page-list').html('')
      this.creatPage()
      this.Fn(this.currentPage)
    }
  },
  homePage:function(){
    this.currentPage = 1
    this.inserHtml.find('.page-list').html('')
    this.creatPage()
    this.Fn(this.currentPage)
  },
  endPage:function(){
    this.currentPage = this.pageCount
    this.inserHtml.find('.page-list').html('')
    this.creatPage()
    this.Fn(this.currentPage)
  },
  //判断页码的加减
  judgePage:function(ev){
    var n = $(ev).attr('data-positin')/1;
    var clickPage = $(ev).attr('data-page')/1,
        lastPage = this.pageCount/1
    if(!$(ev).attr('data-positin'))return
    this.inserHtml.find('.page-list').html('')
    switch(n){
      case 0:
        this.currentPage = clickPage
        this.creatPage()
        break
      case 4:
        this.currentPage = clickPage
        this.creatPage()
        break
      default:
        this.currentPage = clickPage
        this.creatPage()
    }
    this.Fn(this.currentPage)
  }
}
 // module.exports = MetPage