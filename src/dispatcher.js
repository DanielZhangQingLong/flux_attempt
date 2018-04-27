export default class Dispatcher {

  constructor() {
    //this._id = 0;
    // Store add all the reducers.
    this._callbacks = [];
  }

  register(callback) {
    // key is a timestamp, value is the callback
    //let id = (new Date()).getTime();
    //this._callbacks[id] = callback;
    console.log('Push a reducer:\n', callback);
    this._callbacks.push(callback);
  }

  dispatch(action) {
    console.log('Dispatch an action:\n', action);
    console.log('Now all callbacks are:\n', this._callbacks);
    this._callbacks.map((callback) => callback(action));
  }
}
