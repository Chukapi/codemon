import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testCode, fetchOneProblem, putFightAfterBattle } from '../store';
import AceEditor from 'react-ace';
import socket from '../socket';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/snippets/javascript';


class Training extends Component {
  state = { code: '' }

  componentDidMount() {
    this.props.fetchProblem(this.props.user.id);
  }


  onClick = () => {
    const code = this.ace.editor.getValue();
    const { currentPokemonId, testSpecCode, allPokemon, problem, inBattle, challengerSocket, defenderSocket } = this.props;

    const [currentPokemon] = allPokemon.filter(poke => poke.id === currentPokemonId);
    this.setState({ code });
    testSpecCode({ code }, problem.id, currentPokemon, problem.experience)
    .then(() => {
      if(inBattle){
        if(this.props.result === true){
          socket.emit('correct answer', challengerSocket, `${this.props.user.username} won the battle!`, this.props.fightId)
          socket.emit('correct answer 2', defenderSocket, `${this.props.user.username} won the battle!`, this.props.fightId)
          this.props.putFightAfterBattle(this.props.fightId, this.props.user.id)
          .then(() => {
            socket.emit('grab fight info', challengerSocket, this.props.fightId)
            socket.emit('grab fight info 2', defenderSocket, this.props.fightId)            
          })
          alert('You won the battle!')       
        }
      })
  }

  onNextClick = () => {
    this.props.fetchProblem(this.props.user.id);
  }


  render() {
    const { currentPokemonId, result, problem, showWildModal, inBattle } = this.props;
    return (
      <div className="training-area">
        <h3>{problem.prompt}</h3>
        <AceEditor
          className="text-editor"
          value={this.state.code}
          mode="javascript"
          theme="github"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          ref={(ref) => { this.ace = ref }}
          readOnly={!currentPokemonId}
        />
        <button onClick={this.onClick} disabled={!currentPokemonId}>Submit</button>
        {inBattle ? null : <button onClick={this.onNextClick}> Next Problem </button>}
        {
          showWildModal ? null :
            result && typeof result === 'boolean' ? (
              <h2>Tests Passed! {problem.experience} EXP Earned!</h2>
            ) : (
                <h2>{result}</h2>
              )
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    problem: state.training.problem,
    user: state.user,
    result: state.codeEntry,
    currentPokemonId: state.currentPokemonId,
    allPokemon: state.allPokemon,
    showWildModal: state.wildModal.showModal,
    inBattle: state.training.inBattle,
    challengerSocket: state.fight.fightInfo.challengerSocket,
    defenderSocket: state.fight.fightInfo.opponentSocket,
    fightId: state.fight.fightInfo.id
  }
};

const mapDispatch = dispatch => ({
  fetchProblem: (userId) => dispatch(fetchOneProblem(userId)),
  testSpecCode: (code, id, poke, probExp) => dispatch(testCode(code, id, poke, probExp)),
  putFightAfterBattle: (fightId, winnerId) => dispatch(putFightAfterBattle(fightId, winnerId))
});

export default connect(mapState, mapDispatch)(Training);
