import axios from 'axios';

const WILD_ATTACK = 'WILD_ATTACK';

export const wildAttack = () => ({ type: WILD_ATTACK });

export default (showModal = false, action) => {
  switch (action.type) {
    case WILD_ATTACK:
      console.log('WILD MODAL!!', showModal)
      return !showModal;
    default:
      return showModal;
  }
}

