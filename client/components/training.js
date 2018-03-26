import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneProblem } from '../store';
import CodeEntryForm from './codeEntryForm';


class Training extends Component {

  componentDidMount() {
    // const { usersSolved } = this.props;
    // let validProbs = this.props.problems.filter(prob => usersSolved.indexOf(prob.id) === -1);
    // const getRandomIndex = Math.floor(Math.random() * Math.floor(validProbs.length))
    // let currentProblem = validProbs[getRandomIndex];

    this.props.fetchProblem()
  }

  render() {

    return (
      <div className="training-area">
        {currentProblem ? <h1>{currentProblem.prompt}</h1> : null}
        {currentProblem ? <CodeEntryForm problem={currentProblem} /> : null}
      </div>
    )
  }
}

const mapState = state => {
  return {
    usersSolved: state.user.solvedProblems,
    problem: state.training
  }
};

const mapDispatch = dispatch => ({
  fetchProblem: (id) => dispatch(fetchOneProblem(id))
});

export default connect(mapState, mapDispatch)(Training);
