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
    {id: 2, title: "Task 2", status: false},
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
        
        {/* TodoTasks */}
        { toDo && toDo.length ? '' : 'No Tasks....'}

        {toDo && toDo
        .map( (task, index) =>{
          return(
            <React.Fragment key={task.id}>

               <div className="col taskBg">
                <div className={task.status ? 'done': ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskTest">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span></span>
                  <span></span>
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
