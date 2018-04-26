import Dispatcher from '../dispatcher';
import SeniorStore from '../store/seniors.db';

const SeniorDispatcher = new Dispatcher();

SeniorDispatcher.register(function(action){
  switch(action.actionType) {
    case 'PLUS1S': {
      console.log('PLUS1S');
      SeniorStore.plus1s(action.url);
      break;
    }
  }
});

export default SeniorDispatcher;
