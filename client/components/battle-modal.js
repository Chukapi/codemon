import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';

class BattleModal extends Component {

  render(){
    // if(this.props.showBattleModal){
      console.log('BATTLE MODAL')
      return(
        <ReactModal>
          <button>Accept</button>
        </ReactModal>
      )
    // }
  }
}

const mapState = (state) => ({
  showBattleModal: state.battleModal
})

export default connect(mapState)(BattleModal)
