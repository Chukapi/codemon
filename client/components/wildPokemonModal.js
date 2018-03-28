import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import BattleTimer from './timer';
import { hideModal, testCode, clearResult, fetchWildInfo } from '../store';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/snippets/javascript';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class WildPokemonModal extends Component {
  state = { code: '' };

  onClick = () => {
    const code = this.ace.editor.getValue();
    const { testSpecCode, wildProblem, uId, wildPokemon } = this.props;
    const currentPokemon = {
      name: wildPokemon.name,
      exp: wildProblem.experience,
      evolutionLevel: '1',
      imageUrl: wildPokemon.imageUrl,
      userId: uId
    }

    testSpecCode({ code }, wildProblem.id, currentPokemon, wildProblem.experience);
    this.setState({ code });
  }

  onload = editor => {
    editor.setValue('');
  }


  render() {
    const { open, wildPokemon, wildProblem, onCloseModal, result, uId, inBattle } = this.props;

    if (inBattle) {
      return null;
    } else {
      return (
        <div>
          <Modal
            open={open}
            onClose={() => onCloseModal(uId)}
            styles={customStyles}
            little
            classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
            <div className="wild-poke-attack">
              <img src={wildPokemon.imageUrl} />
              <h3>Wild {wildPokemon.name} has attacked!</h3>
              <p>To catch it, solve the problem below</p>
            </div>

            <div className="wild-poke-code-area">
              <h5>{wildProblem.prompt}</h5>
              <BattleTimer />
              <AceEditor
                className="text-editor"
                value={this.state.code}
                mode="javascript"
                theme="github"
                name="UNIQUE_ID_OF_DIV"
                onLoad={this.onload}
                editorProps={{ $blockScrolling: true }}
                ref={(ref) => { this.ace = ref }}
                height="200px"
              />
            </div>

            <div>
              <button type="submit" onClick={this.onClick}>Capture</button>
              <button onClick={() => onCloseModal(uId)}>Run Away</button>
            </div>
            <div>
              {result !== null && (result === false || (typeof result !== 'boolean' && result.includes('Error'))) ? (
                <div>
                  <h2>Unsuccessful. Try Again.</h2>
                  <p>{result}</p>
                </div>
              )
                : null}
              {result === true
                ?
                (
                  <div>
                    <h2>You have successfully captured {wildPokemon.name}!</h2>
                    <div className="set-timeout">
                      {
                        setTimeout(() => onCloseModal(uId), 3000)
                      }
                    </div>
                  </div>
                )
                : null}
            </div>
          </Modal>
        </div>
      )
    }
  }
}

const mapState = state => ({
  open: state.wildModal.showModal,
  wildPokemon: state.wildModal.wildPokemon,
  wildProblem: state.wildModal.wildProblem,
  uId: state.user.id,
  result: state.codeEntry,
  inBattle: state.training.inBattle
});

const mapDispatch = dispatch => ({
  onCloseModal: id => {
    dispatch(hideModal());
    dispatch(clearResult());
    dispatch(fetchWildInfo(id));
  },
  testSpecCode: (code, id, poke, probExp) => dispatch(testCode(code, id, poke, probExp))
});

export default connect(mapState, mapDispatch)(WildPokemonModal);
