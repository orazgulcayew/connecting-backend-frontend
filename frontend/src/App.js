import './App.css';
import React, {Component} from 'react';
import axios from 'axios'

// CHANGE TO YOUR BACKEND URL
const backendUrl = "http://192.168.1.22:8080/api/"

// BASE URL (backend)
const api = axios.create({
  baseURL: backendUrl
})

class App extends Component{
  state = {
    tasks: []
  }

  constructor(){
    super();
    this.getTasks()
  }

  // Function for getting all task (Hemme tasklary almak ucin funksiya)
  getTasks = async () => {
    let data = await api.get('/tasks').then(({data}) => data);
    this.setState({tasks: data})
  }

  setTask = async (title, text) => {
    const data = {
      title: title,
      text: text
    }
      
    console.log(data)
    try {
      await api.post("/task", data, { "Content-Type": "multipart/form-data" })
      this.getTasks()
      // make axios post request
    } catch(error) {
      console.log(error)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target.elements.taskTitle.value
    const text = event.target.elements.taskText.value

    // Call setTask for saving to backend
    this.setTask(title, text)
  
  }

  render(){
    return (
      <div className="App">
        {/* ADD TASK */}
        <h1 className='headerText'>Add new task 🤙</h1>
        
        <div>
            <form className='addTaskForm' onSubmit={this.handleSubmit}>
              <label>Task title</label>
              <input type="text" id="title" name="taskTitle" placeholder="Task title..."/>

              <label>Task text</label>
              <input type="text" id="text" name="taskText" placeholder="Task text..."/>
            
              <input type="submit" value="Add Task"/>
            </form>
          </div>
        
        {/* TASKS */}
        <div className='tasks'>
          <h1 className='headerText'>Must complete tasks ✅</h1>
          {this.state.tasks.map(task => 
          <div className='taskHolder'>
            <h2 key={task.id}>{task.title}</h2>
            <p>{task.text}</p>
          </div>)}
        </div>
      </div>
    );
  }
}

export default App;
