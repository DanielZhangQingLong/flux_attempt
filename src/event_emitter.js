export default class EventEmitter {
  constructor() {
    this._events = {};
  }

  // Add typed listeners e.g. change: [listeners...]
  on(type, listener) {
    this._events[type] = this._events[type] || [];
    // The structure _events is  {type: [], type2: []}
    // Only push it into the array not invoke.
    this._events[type].push(listener);
    console.log('_events for change', this._events['change']);
  }

  // Invoke all the listener of some-type
  emit(type) {
    if(this._events[type]){
      this._events[type].map((listener) => {
        listener();
      });
    }
  }

}
