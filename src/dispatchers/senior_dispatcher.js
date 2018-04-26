import Dispatcher from '../dispatcher';
import SeniorStore from '../store/seniors.db';

const SeniorDispatcher = new Dispatcher();

SeniorDispatcher.register(function(action){
  switch(actionType) {
    case 'PLUS1S': {
      console.log('PLUS1S');
      break;
    }
  }
});
