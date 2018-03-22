import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import { testCode, revisePokemon } from '../store';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/snippets/javascript';

class CodeEntryForm extends Component {
  state = { code: '' } //Don't think we need this

  onClick = event => {
    event.preventDefault()

    const { currentPokemon, exp, testSpecCode } = this.props;
    const code = this.ace.editor.getValue();

    testSpecCode({ code }, 1, currentPokemon, exp)
    this.setState({ code }) //Don't think we need this
  }

  // RENDER EDITOR
  render() {
    const { currentPokemon, result } = this.props;

    return (
      <div>
        <AceEditor
          value={this.state.code}
          mode="javascript"
          theme="github"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          ref={(ref) => { this.ace = ref }}
          readOnly={!currentPokemon.id}
        />
        <button onClick={this.onClick} disabled={!currentPokemon.id}>Submit</button>

        {result === true &&
          <h2>Tests Passed! {this.props.exp} EXP Earned!</h2>}

        {result === false ? <h2>Tests Failed. Try Again.</h2> : <h2>{result}</h2>}
      </div>
    )
  }
}

const mapState = state => ({
  result: state.codeEntry,
  exp: state.training.experience,
  currentPokemon: state.currentPokemon
});

const mapDispatch = dispatch => ({
  testSpecCode: (code, id, poke, probExp) => dispatch(testCode(code, id, poke, probExp)),
  updateExp: (id, exp) => dispatch(revisePokemon(id, exp))
});

export default connect(mapState, mapDispatch)(CodeEntryForm)
