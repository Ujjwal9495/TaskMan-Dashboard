
import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
   const toggleComplete = (index) => {

    const updatedTask = {
        ...tasks[index],
        completed: !tasks[index].completed
    };

    // Play success sound only when completing task
    if (!tasks[index].completed) {

        const audio = new Audio(successSound);
        audio.play();

    }

    updateTask(updatedTask, index);
}
  return (
    <ul className='task-list'>
        {tasks.map((task, index)=>(
            <li
                  key={index}
                   className={`task-card ${task.completed ? 'completed' : ''}`}
            >
                <div>
                    <span>{task.text}</span>
                   <small className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                </small>

                <p>{task.category}</p>
                </div>

                <div>
                    <button onClick={()=>toggleComplete(index)}
                    >{task.completed ? "Undo" : "Complete"}</button>
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
  )
}