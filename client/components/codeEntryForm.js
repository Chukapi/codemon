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

    console.log('NO LOOK AT THIS', this.props.currentPokemon, this.props.exp)

    const { currentPokemon, exp, testSpecCode } = this.props;
    const code = this.ace.editor.getValue();

    testSpecCode({ code }, 1, currentPokemon, exp)
    this.setState({ code }) //Don't think we need this
  }

  // RENDER EDITOR
  render() {
    console.log('inside render', this.props)
    return (
      <div>
        <AceEditor
          value={this.state.code}
          mode="javascript"
          theme="github"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          ref={(ref) => { this.ace = ref }}
        />
        <button onClick={this.onClick}>Submit</button>

        {this.props.result &&
          <h2>Tests Passed! {this.props.exp} EXP Earned!</h2>}

        {!this.props.result ? <h2>Tests Failed. Try Again.</h2> : <h2>{this.props.result}</h2>}
      </div>
    )
  }
}

//If pass we need to check if exp is >= certain amount
//If so update evolution level by 1 on pokemon model
// & update name and imageUrl as well (grab name and image from Evolution model and update that pokemon's id)

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

// function returnString(str) {
//   return str;
// }
