import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';

export class BattleModal extends Component {

  render(){
    if(this.props.showBattleModal){
      return(
        <Modal>
          <button>Accept</button>
        </Modal>
      )
    }
  }
}

const mapState = (state) => ({
  showBattleModal: state.battleModal
})

export default connect(mapState)(BattleModal)
