import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProblems } from '../store';
import CodeEntryForm from './codeEntryForm';


class Training extends Component {

  componentDidMount() {
    this.props.fetchAllTheProblems()
  }

  render() {
    const {usersSolved} = this.props;
    let validProbs = this.props.problems.filter(prob => usersSolved.indexOf(prob.id) === -1);
    const getRandomIndex = Math.floor(Math.random() * Math.floor(validProbs.length))
    let currentProblem = validProbs[getRandomIndex];
    return (
      <div>
        { currentProblem ?  <h1>{currentProblem.prompt }</h1> :  null }
        { currentProblem ? <CodeEntryForm problem={currentProblem} /> : null }
      </div>
    )
  }
}

const mapState = state => {
  return {
    usersSolved: state.user.solvedProblems,
   problems: state.training
 }
};

const mapDispatch = dispatch => ({
  fetchAllTheProblems: () => dispatch(fetchAllProblems())
});

export default connect(mapState, mapDispatch)(Training);
