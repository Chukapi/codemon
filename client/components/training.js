import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProblem, fetchAllProblems } from '../store';
import CodeEntryForm from './codeEntryForm';


class Training extends Component {
  constructor(){
    super()
    // this.state = {
    //   problem: {}
    // }
  }

  componentDidMount() {
    this.props.fetchAllTheProblems()
    // console.log(this.props, "Training this.props")

    //
    // let currentProblem =
    // this.setState({ problem: currentProblem });
  }

  render() {
    console.log("STATE PROBLEM", this.props.problems)
    let getRandomIndex = Math.floor(Math.random() * Math.floor(this.props.problems.length - 1))
    let currentProblem = this.props.problems[getRandomIndex]
    console.log("current", currentProblem)
    return (
      <div>
        { currentProblem ?  <h1>{currentProblem.prompt }</h1> :  null }
        { currentProblem ? <CodeEntryForm problem={currentProblem}/> : null }
      </div>
    )
  }
}

const mapState = state => {
  console.log("STATE", state.training)
  return {
   problems: state.training
 }
};

const mapDispatch = dispatch => ({
  // fetchProblem: () => dispatch(fetchProblem()),
  fetchAllTheProblems: () => dispatch(fetchAllProblems())
});

export default connect(mapState, mapDispatch)(Training);
