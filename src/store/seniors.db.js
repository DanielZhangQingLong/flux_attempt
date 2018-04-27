import EventEmitter from '../event_emitter'

// Simulate a store. In real world, this should be an API request.
const Seniors = {
  "1": {
    url: "http://photocdn.sohu.com/20140811/Img403316505.jpg"
  }, 
  "2": {
    url: "http://photocdn.sohu.com/20140811/Img403316505.jpg"
  }
}

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
  console.log('Current Senior Store', Seniors);
  this.emitChange();
}

export default SeniorStore;
