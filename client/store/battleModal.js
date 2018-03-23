import axios from 'axios';

const showModal = false;
//ACTION TYPES
const TRIGGER_MODAL = 'TRIGGER_MODAL';

//ACTION CREATORS
export const triggerModal = () => ({ type: TRIGGER_MODAL });


//THUNK CREATORS


//REDUCER
export default (state = showModal, action) => {
  switch (action.type) {
    case TRIGGER_MODAL:
      return !showModal;
    default: 
      return state;
  }
}

