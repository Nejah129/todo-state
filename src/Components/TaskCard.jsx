import React, { Component } from 'react'

export default class TaskCard extends Component {
    render() {
    //   console.log(this.props)
    return (
      <div>
        <h1 id={this.props.tach.isDone?"theOne":null}  >{this.props.tach.action}</h1>
        <button onClick={()=>this.props.faskh(this.props.tach.id)}>Delete</button>
        <button onClick={()=>this.props.complete(this.props.tach.id)}>{this.props.tach.isDone?"Undo":"Complete"}</button>
        <hr />
      </div>
    )
  }
}
