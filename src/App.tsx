import React from 'react';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';

function App() {

    const shapka1 = 'Header№1'
    const shapka2 = 'Header№2'

    const tasks1: TaskType[] = [
        { id: 1, title: "HTML&CSS", isDone: false },
        { id: 2, title: "JS", isDone: false },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2: TaskType[] = [
        { id: 1, title: "Hello world", isDone: false },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false },
        { id: 4, title: "Yo", isDone: false }
    ]



    return (
        <div className="App">
            <ToDoList shapka={shapka1} tasks={tasks1} />
            <ToDoList shapka={shapka2} tasks={tasks2} />
        </div>
    );
}

export default App;
