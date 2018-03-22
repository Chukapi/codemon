import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProblem, fetchAllProblems } from '../store';
import CodeEntryForm from './codeEntryForm';


class Training extends Component {
  constructor(){
    super()
    this.state = {
      problem: {}
    }
  }

  componentDidMount() {
    this.props.fetchAllTheProblems()

    let getRandomIndex = Math.floor(Math.random() * Math.floor(this.props.problems.length - 1))
    let currentProblem =  this.props.problems[getRandomIndex]
    this.setState({ problem: currentProblem});

    // .then(
    // console.log("PRBLES", this.props.problems))
    // this.props.fetchProblem(1);
  }

  render() {
    console.log("STATE PROBLEM", this.state.problem)
    return (
      <div>

        {/* <h1>{this.state.problem.prompt && this.state.problem.prompt}</h1> */}
        {/* <CodeEntryForm problemId = {this.state.problem.id}/> */}
      </div>
    )
  }
}

const mapState = state => ({
  // prompt: state.training.prompt,
  problems: state.training
});

const mapDispatch = dispatch => ({
  // fetchProblem: () => dispatch(fetchProblem()),
  fetchAllTheProblems: () => dispatch(fetchAllProblems())
});

export default connect(mapState, mapDispatch)(Training);
