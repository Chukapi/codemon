import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import store, {testCode} from '../store';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/snippets/javascript';

class CodeEntryForm extends React.Component {
  constructor(){
    super();
    this.state ={
      code: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){
    console.log('here')
  }

  onClick(event){
    event.preventDefault()
    const code = this.ace.editor.getValue();
    this.props.testCode({code}, 1)
    this.setState({code})
  }
  
  // Render editor
  render(){
    return (
      <div>
        <AceEditor
          value={this.state.code}
          mode="javascript"
          theme="github"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          ref={(ref) => {this.ace = ref}}
        />
        <button onClick={this.onClick}>Submit</button>
        {this.props.result === true ? <h2>Tests Passed! 10 EXP Earned!</h2> : null}
        {this.props.result === false ? <h2>Tests Failed. Try Again.</h2> : <h2>{this.props.result}</h2>}
      </div>
    )
  }
}

const mapState = function(state){
  return {
    result: state.codeEntry
  }
}

const mapDispatch = function (dispatch){
  return {
    testCode: function(code, id){
      dispatch(testCode(code, id))
    }
  }
}

export default connect(mapState, mapDispatch)(CodeEntryForm)