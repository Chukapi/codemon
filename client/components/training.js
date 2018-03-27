import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testCode, fetchOneProblem } from '../store';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/snippets/javascript';


class Training extends Component {
  state = { code: '' }

  componentDidMount() {
    this.props.fetchProblem(this.props.userId);
  }


  onClick = () => {
    const code = this.ace.editor.getValue();
    const { currentPokemonId, testSpecCode, allPokemon, problem } = this.props;

    const [currentPokemon] = allPokemon.filter(poke => poke.id === currentPokemonId);
    testSpecCode({ code }, problem.id, currentPokemon, problem.experience);
    this.setState({ code });
  }

  onNextClick = () => {
    this.props.fetchProblem(this.props.userId);
  }


  render() {
    const { currentPokemonId, result, problem, showWildModal } = this.props;
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
        <button onClick={this.onNextClick}> Next Problem </button>
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
    problem: state.training,
    userId: state.user.id,
    result: state.codeEntry,
    currentPokemonId: state.currentPokemonId,
    allPokemon: state.allPokemon,
    showWildModal: state.wildModal.showModal
  }
};

const mapDispatch = dispatch => ({
  fetchProblem: (userId) => dispatch(fetchOneProblem(userId)),
  testSpecCode: (code, id, poke, probExp) => dispatch(testCode(code, id, poke, probExp))
});

export default connect(mapState, mapDispatch)(Training);
