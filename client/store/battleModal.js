
const showModal = {
  isOpen: false, 
  msg: ''
}
//ACTION TYPES
const TRIGGER_MODAL = 'TRIGGER_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

//ACTION CREATORS
export const triggerModal = (msg) => ({ type: TRIGGER_MODAL, msg });

export const closeModal = () => ({type: CLOSE_MODAL})


//REDUCER
export default (state = showModal, action) => {
  switch (action.type) {
    case TRIGGER_MODAL:
      return {isOpen: true, msg: action.msg}
    case CLOSE_MODAL:
      return {isOpen: false, msg: ''}
    default: 
      return state;
  }
}

