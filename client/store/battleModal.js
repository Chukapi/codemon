import axios from 'axios';

const showModal = {
  isOpen: false,
  msg: ''
}
//ACTION TYPES
const TRIGGER_MODAL = 'TRIGGER_MODAL';

//ACTION CREATORS
export const triggerModal = (msg) => {
  console.log('MADE IT HERE')
  return { type: TRIGGER_MODAL, msg }
};


//THUNK CREATORS


//REDUCER
export default (state = showModal, action) => {
  switch (action.type) {
    case TRIGGER_MODAL:
      return { isOpen: true, msg: action.msg }
    default:
      return state;
  }
}

