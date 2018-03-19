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
    this.state = {
      input: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){
    console.log('here')
  }

  onChange(newValue, event) {
  //  console.log(newValue, event);
  }

  onClick(){
    const code = this.ace.editor.getValue();
    this.props.testCode({code}, 1);
  }
  
  // Render editor
  render(){
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="github"
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          ref={(ref) => {this.ace = ref}}
        />
        <button onClick={this.onClick}>Submit</button>
      </div>
    )
  }
}

const mapDispatch = function (dispatch){
  return {
    testCode: function(code, id){
      dispatch(testCode(code, id))
    }
  }
}

export default connect(null, mapDispatch)(CodeEntryForm)