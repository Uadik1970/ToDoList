import React from 'react'


type TasksPropsType = {
    shapka: string
    tasks: TaskType[]
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


const ToDoList = (props: TasksPropsType) => {
    return (
        <div>
            <h3>{props.shapka}</h3>

            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(task =>
                    <li><input type="checkbox" checked={task.isDone} /> <span>{task.title}</span></li>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default ToDoList