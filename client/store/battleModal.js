
const showModal = {
  isOpen: false,
  msg: '',
  pokemon: {}
}
//ACTION TYPES
const TRIGGER_MODAL = 'TRIGGER_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

//ACTION CREATORS
export const triggerModal = (msg, pokemon) => ({ type: TRIGGER_MODAL, msg, pokemon });

export const closeModal = () => {
  return {type: CLOSE_MODAL}
}


//REDUCER
export default (state = showModal, action) => {
  switch (action.type) {
    case TRIGGER_MODAL:
      return {isOpen: true, msg: action.msg, pokemon: action.pokemon}
    case CLOSE_MODAL:
      return Object.assign({}, state, {isOpen: false})
    default:
      return state;
  }
}

