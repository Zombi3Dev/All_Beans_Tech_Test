import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableDisplay from './TableDisplay';

function App() {

    const dataValue = "someText";

    return (
        <div className="App">
            <header class="title">
                <h3>All the beans</h3>
            </header>

            <TableDisplay data={dataValue}/>
        </div>
    );
}

export default App;
