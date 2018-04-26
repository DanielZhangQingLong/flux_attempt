import EventEmitter from '../event_emitter'
export default class SeniorStore extends EventEmitter {


  static fetchAllSeniors() {
    return Seniors;
  } 

  emitChange() {
    this.emit('change');
  }

  addChangeListener(listener) {
    this.on('change', listener);
  }

  plus1s(s) {
    Seniors[Object.keys(Seniors).length + 1] = {
      url: s
    }
  }

}

const Seniors = {
  "1": {
    url: "http://ww2.sinaimg.cn/large/84403255gw1f3g351wytoj20fa0bzdhm.jpg"
  }, 
  "2": {
    url: "https://steam.indienova.com/pic/header/821/820710.jpg"
  }
}
