import React, { Component } from 'react'
import { connect } from "react-redux"
import { hideModal } from '../store';

class BattleTimer extends Component {
  constructor (props) {
    super(props)
    this.state = {count: 120}
  }

  componentDidMount () {
    this.startTimer()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({count: (this.state.count - 1)})
    if (this.state.count === 0){
      this.props.hideModal()
    }
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  render () {
    return (
      <div className="wild-poke-attack">
        <h3>Time Remaining: {this.state.count}</h3>
      </div>
    )
  }
}

const mapDispatch = { hideModal }

export default connect(null, mapDispatch)(BattleTimer)
