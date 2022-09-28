import React, { Component } from 'react'
import TaskCard from './TaskCard'

export default class TaskList extends Component {
  render() {
    // console.log(this.props)

    return (
      <div>
        {
React.Children.toArray(this.props.list.map(task=><TaskCard tach={task} faskh={this.props.deleteTask} complete={this.props.complete} />))
        }
      </div>
    )
  }
}
