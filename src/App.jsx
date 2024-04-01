import './App.css'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from "@fortawesome/free-solid-svg-icons";

function App() {

  //Task ToDo List State
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", status: false},
    {id: 2, title: "Task 2", status: false}
  ])
  //Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add Task
  const addTask = (id) => {

  }
  //

  //Add Task
  const deleteTask = (id) => {

  }
  //
  //Add Task
  const markDone= (id) => {

  }
  //
  //Add Task
  const cancelUpdate= () => {

  }
  //
  //Add Task
  const changeTask= (e) => {

  }
  //

  //Add Task
  const updateTask= () => {

  }
  //

  return (
    <>
      <div className='container App'>
        <br /><br />
        <h2>To Do list (ReactJS)</h2>
        <br /><br />
        
        {/* Update Task */}
        <div className="row">
          <div className="col">
            <input className='form-control form-control-lg'/>
          </div>
          <div className="col-auto">
            <button className='btn btn-lg btn-success mr-20'>
              Update
            </button>
            <button className='btn btn-lg btn-warning'>
              Cancel
            </button>
          </div>
        </div>
        <br />

        {/*Add Task */}
        <div className="row">
          <div className="col">
            <input 
              value={newTask}
              onChange={ (e) => setNewTask }
            className='form-control form-control-lg'/>
          </div>
          <div className="col-auto">
            <button className='btn btn-lg btn-success'>
              Add Task
            </button>
          </div>
        </div>
        <br />

        {/* TodoTasks */}
        { toDo && toDo.length ? '' : 'No Tasks....'}

        {toDo && toDo
        .sort((a,b) => a.id > b.id ? 1 : -1)
        .map( (task, index) =>{
          return(
            <React.Fragment key={task.id}>

               <div className="col taskBg">
                <div className={task.status ? 'done': ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskTest">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title='Completed / Not Completed'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span title='Edit'>
                  <FontAwesomeIcon icon={faPen} />
                  </span>
                  <span title='Delete'>
                  <FontAwesomeIcon icon={faTrashCan} />

                  </span>
                </div>
              </div>

            </React.Fragment>
          )
        })
      }
      
      </div>


    </>
  )
}

export default App
