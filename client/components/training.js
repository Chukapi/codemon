import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import store, {fetchProblem} from '../store';
import CodeEntryForm from './codeEntryForm';


class Training extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.fetchProblem(1);
  }
  
  render(){
    return (
      <div>
        <h1>{this.props.prompt && this.props.prompt}</h1>
        <CodeEntryForm />
      </div>
    )
  }
}

const mapState = function(state){
  return {
    prompt: state.training
  }
}

const mapDispatch = function (dispatch){
  return {
    fetchProblem: function(id){
      dispatch(fetchProblem(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Training)