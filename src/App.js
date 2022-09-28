import React, { Component } from 'react'
import "./App.css"
import AddNewTask from './Components/AddNewTask'
import TaskList from './Components/TaskList'

export default class App extends Component {

state={
  todos:[
    {
      id:Math.random(),action:"Wake Up",isDone:true
    },
    {
      id:Math.random(),action:"Go Out",isDone:false
    },
  ],
  newTach:""
}

// delete task
handleDelete=(ID)=>this.setState({todos:this.state.todos.filter(task=>task.id!==ID)})
// complete task
handelComplete=(TheId)=>this.setState({todos:this.state.todos.map(el=>el.id===TheId?{...el,isDone:!el.isDone}:el)})
//EDIT THE newTach
handleChange=(x)=>this.setState({newTach:x})
//ADD NEW task
handleAdd=(newOne)=>this.setState({todos:[newOne,...this.state.todos]})
  render() {
    return (
      <div className='App'>
        <AddNewTask theText={this.state.newTach} theChange={this.handleChange} addTheTask={this.handleAdd}/>
        <TaskList list={this.state.todos} deleteTask={this.handleDelete} complete={this.handelComplete}/>
      </div>
    )
  }
}
