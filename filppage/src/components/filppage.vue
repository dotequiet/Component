<template>
  <div class="page">
    <div class="book-contain">
      <div class="left-btn" @click="pageTurn('pre')"></div>
      <div class="right-btn" @click="pageTurn('next')"></div>
      <div class="reader-content">
        <div class="first-page js-first-page" style="background-color: #000"></div>
        <div class="second-page js-second-page" style="background-color: #f60"></div>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-bind:css="true"
        >
          <div v-show="show" class="turn-page js-next-turn">
            <div class="page-show" style="background-color: #4ccdb6"></div>
            <div class="page-hide" style="background-color: #f60"></div>
          </div>
        </transition>
        <transition
          v-on:before-enter="letfBeforeEnter"
          v-on:enter="leftEnter"
          v-bind:css="true"
        >
          <div v-show="leftShow" class="turn-page js-pre-turn">
            <div class="page-show" style="background-color: #4ccdb6"></div>
            <div class="page-hide" style="background-color: #f60"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'book',
    data () {
      return {
        show: false,
        leftShow: false,
        direction: '',
        leftAnimation: '',
        rightAnimation: ''
      }
    },
    mounted () {
      this.leftAnimation = document.querySelector('.js-pre-turn')
      this.rightAnimation = document.querySelector('.js-next-turn')
      this.setEvent()
    },
    methods: {
      setEvent () {
        let pfx = ['webkit', 'moz', 'MS', 'o', '']
        pfx.forEach((item) => {
          this.leftAnimation.addEventListener(`${item}animationend`, this.leftAnimationListener, false)
          this.rightAnimation.addEventListener(`${item}animationend`, this.rightAnimationListener, false)
          // this.leftAnimation.attachEvent(`${item}Animationend`, this.leftAnimationListener, false)
          // this.rightAnimation.attachEvent(`${item}Animationend`, this.rightAnimationListener, false)
        })
      },
      rightAnimationListener () {
        document.querySelector('.js-first-page').style.backgroundColor = '#4ccdb7'
      },
      leftAnimationListener () {
        document.querySelector('.js-second-page').style.backgroundColor = '#000'
      },
      pageTurn (direction) {
        this.direction = direction
        if (direction === 'next') {
          this.show = true
        } else if (direction === 'pre') {
          this.leftShow = true
        }
      },
      beforeEnter (el) {
        el.style.animation = 'page 0.7s linear 1 forwards'
        document.querySelector('.js-second-page').style.backgroundColor = '#ccc'
      },
      enter (el) {
        this.show = false
      },
      letfBeforeEnter (el) {
        el.style.animation = 'pages 0.7s linear 1 forwards'
        // document.querySelector('.js-first-page').style.backgroundColor = '#000'
      },
      leftEnter (el) {
        this.leftShow = false
      }
    }
  }
</script>

<style>
  ul, li {
    list-style: none;
    list-style-image: none;
  }
  a {
    text-decoration: none;
    color: #333
  }
  /*翻书下一页的动画*/
  @keyframes page {
    0% {
      -webkit-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    100% {
      -webkit-transform: rotateY(-180deg);
      -moz-transform: rotateY(-180deg);
      -ms-transform: rotateY(-180deg);
      transform: rotateY(-180deg);
    }
  }
  /*翻书上一页的动画*/
  @keyframes pages {
    0% {
      -webkit-transform: rotateY(-180deg);
      -moz-transform: rotateY(-180deg);
      -ms-transform: rotateY(-180deg);
      transform: rotateY(-180deg);
    }
    100% {
      -webkit-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
  }
  .book-contain {
    width: 1000px;
    min-height: 462px;
    position: relative;
    top: 40px;
    margin: 0 auto;
  }
  .book-contain .left-btn {
    width: 38px;
    position: absolute;
    top: 215px;
    left: 0;
    cursor: pointer;
  }
  .left-btn:after {
    content: '';
    display: block;
    height: 30px;
    width: 30px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(-45deg);
  }
  .right-btn {
    width: 38px;
    position: absolute;
    top: 215px;
    right: 0;
    cursor: pointer;
  }
  .right-btn:after {
    content: '';
    display: block;
    height: 30px;
    width: 30px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(135deg);
  }
  .reader-content {
    width: 868px;
    height: 462px;
    position: absolute;
    top: 28px;
    left: 90px;
    -webkit-perspective: 1200px;
    -moz-perspective: 1200px;
    -ms-perspective: 1200px;
    perspective: 1200px;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .page-show, .page-hide {
    width: 412px;
    height: 462px;
    position: absolute;
  }
  .turn-book-page {
    -webkit-transform: translateZ(1px);
    -moz-transform: translateZ(1px);
    -ms-transform: translateZ(1px);
    transform: translateZ(1px);
  }
  .turn-book-page-right {
    -webkit-transform: translateZ(2px);
    -moz-transform: translateZ(2px);
    -ms-transform: translateZ(2px);
    transform: translateZ(2px);
  }
  .page-right {
    left: 359px;
  }
  .turn-page {
    width: 420px;
    position: absolute;
    right: 35px;
    top: 0;
    -webkit-transform-origin: left;
    -moz-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .page-hide {
    z-index: 0;
    -webkit-transform: rotateY(-180deg) translateZ(1px);
    -moz-transform: rotateY(-180deg) translateZ(1px);
    -ms-transform: rotateY(-180deg) translateZ(1px);
    transform: rotateY(-180deg) translateZ(1px);
  }
  .page-show {
    z-index: 1;
    -webkit-transform: translateZ(1px);
    -moz-transform: translateZ(1px);
    -ms-transform: translateZ(1px);
    transform: translateZ(1px);
  }
  .first-page {
    width: 412px;
    height: 462px;
    position: absolute;
  }
  .second-page {
    width: 412px;
    height: 462px;
    position: absolute;
    right: 44px;
    -webkit-transform: translateZ(1px);
    -moz-transform: translateZ(1px);
    -ms-transform: translateZ(1px);
    transform: translateZ(1px);
  }
  .book-bg {
    width: 868px;
    height: 498px;
    position: relative;
    top: 17px;
    left: 66px;
  }
</style>
