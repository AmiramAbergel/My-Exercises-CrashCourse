import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
    const data = [
        {
            id: 1,
            text: 'Learn react'
        },
        {
            id: 2,
            text: 'Learn typescript'
        },
        {
            id: 3,
            text: 'Learn react typescript'
        }
    ];

    return (
        <div className='App'>
            <Todos items={data}></Todos>
        </div>
    );
}

export default App;
