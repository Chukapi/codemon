import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import { testCode } from '../store';


import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/snippets/javascript';

class CodeEntryForm extends Component {
  state = { code: '' }

  onClick = event => {
    event.preventDefault();

    const code = this.ace.editor.getValue();
    const { currentPokemonId, testSpecCode, allPokemon } = this.props;

    const [currentPokemon] = allPokemon.filter(poke => poke.id === currentPokemonId);
    testSpecCode({ code }, this.props.problem.id, currentPokemon, this.props.problem.experience);
    this.setState({ code });
  }

  // RENDER EDITOR
  render() {
    const { currentPokemonId, result } = this.props;

    return (
      <div>
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
        {result === true &&
          <h2>Tests Passed! {this.props.problem.experience} EXP Earned!</h2>}

        {result === false ? <h2>Tests Failed. Try Again.</h2> : <h2>{result}</h2>}
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    problem: ownProps.problem,
    result: state.codeEntry,
    currentPokemonId: state.currentPokemonId,
    allPokemon: state.allPokemon
  }
};

const mapDispatch = dispatch => ({
  testSpecCode: (code, id, poke, probExp) => dispatch(testCode(code, id, poke, probExp)),
});

export default connect(mapState, mapDispatch)(CodeEntryForm)
