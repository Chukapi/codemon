import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProblem } from '../store';
import CodeEntryForm from './codeEntryForm';


class Training extends Component {

  componentDidMount() {
    this.props.fetchProblem(1);
  }

  render() {
    return (
      <div>
        <h1>{this.props.prompt && this.props.prompt}</h1>
        <CodeEntryForm />
      </div>
    )
  }
}

const mapState = state => ({
  prompt: state.training.prompt
});

const mapDispatch = dispatch => ({
  fetchProblem: id => dispatch(fetchProblem(id))
});

export default connect(mapState, mapDispatch)(Training);
