const _audio = class {
  constructor(){
    this.audioEle = document.querySelectorAll('audio')
    // 用于判断是否是第一次播放，第一次播放需要将数据全部load一下兼容ios
    this.isAudioLoading = false
  }
  playAudio () {
    debugger
    if(!this.isAudioLoading){
      Array.from(this.audioEle).map((item, idx) => {
        item.pause()
        item.load()
      })
      this.isAudioLoading = true
    }
    this.audioEle[0].play()
  }
  resetPlay (idx) {
    this.audioEle[idx].pause()
  }
  nextAudio (idx) {
    Array.from(this.audioEle).map((item, idx) => {
      item.pause()
    })
    this.audioEle[idx].currentTime = 0
    this.audioEle[idx].play()
  }
  preAudio (idx) {
    Array.from(this.audioEle).map((item, idx) => {
      item.pause()
    })
    this.audioEle[idx].currentTime = 0
    this.audioEle[idx].play()
  }
  endPlay (fn) {
    Array.from(this.audioEle).map((item, idx) => {
      item.addEventListener('ended', (event) => {
        if (typeof fn === 'function') {
          fn()
        }
      })
    })
  }
}
// const _audio = function () {
//   this.init()
// }

// _audio.prototype = {
//   init: function () {
//     this.audioEle = document.querySelectorAll('audio')
//     this.isAudioLoading = false
//   },

//   playAudio: function () {
//     if(!this.isAudioLoading){
//       Array.from(this.audioEle).map((item, idx) => {
//         item.pause()
//         item.load()
//       })
//       this.isAudioLoading = true
//     }
//     this.audioEle[0].play()
//   },

//   resetPlay: function (idx) {
//     this.audioEle[idx].pause()
//   },

//   nextAudio: function (idx) {
//     Array.from(this.audioEle).map((item, idx) => {
//       item.pause()
//     })
//     this.audioEle[idx].currentTime = 0
//     this.audioEle[idx].play()
//   },

//   preAudio: function (idx) {
//     Array.from(this.audioEle).map((item, idx) => {
//       item.pause()
//     })
//     this.audioEle[idx].currentTime = 0
//     this.audioEle[idx].play()
//   },

//   endPlay: function (fn) {
//     Array.from(this.audioEle).map((item, idx) => {
//       item.addEventListener('ended', (event) => {
//         if (typeof fn === 'function') {
//           fn()
//         }
//       })
//     })
//   }
// }

module.exports = _audio
