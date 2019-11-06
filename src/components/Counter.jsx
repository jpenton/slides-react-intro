// @ts-check
import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(state => {
      return {
        count: state.count + 1,
      }
    })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ marginBottom: '12px' }}>Count: {this.state.count}</span>
        <button onClick={this.increment} style={{ fontSize: '24px' }}>
          Add
        </button>
      </div>
    )
  }
}

export default Counter
