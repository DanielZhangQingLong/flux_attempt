export default class Dispatcher {

  constructor() {
    //this._id = 0;
    this._callbacks = [];

  }

  register(callback) {
    // key is a timestamp, value is the callback
    //let id = (new Date()).getTime();
    //this._callbacks[id] = callback;
    this._callbacks.push(callback);
  }

  dispatch(action) {
    this._callbacks.map((callback) => callback(action));
  }
}
