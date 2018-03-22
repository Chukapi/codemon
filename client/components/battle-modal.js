import React, {Component} from 'react';
import Modal from 'react-modal';

export default class BattleModal extends Component {
  constructor(){
    super();
    
  }

  render(){
    return(
      <Modal>
        <button>Accept</button>
      </Modal>
    )
  }
}