import EventEmitter from '../event_emitter'

const SeniorStore = new EventEmitter();

SeniorStore.fetchAllSeniors = function(){
  return Seniors;
}

SeniorStore.emitChange = function() {
  this.emit('change');
}

SeniorStore.addChangeListener = function(listener) {
  this.on('change', listener);
}

SeniorStore.plus1s = function(s) {
  Seniors[Object.keys(Seniors).length + 1] = {
    url: s
  }
  this.emitChange();
}

const Seniors = {
  "1": {
    url: "http://ww2.sinaimg.cn/large/84403255gw1f3g351wytoj20fa0bzdhm.jpg"
  }, 
  "2": {
    url: "https://steam.indienova.com/pic/header/821/820710.jpg"
  }
}

export default SeniorStore;
