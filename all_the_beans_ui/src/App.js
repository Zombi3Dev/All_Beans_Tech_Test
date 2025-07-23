import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableDisplay from './TableDisplay';
import { Button, TableRow } from '@mui/material';
import OrderForm from './OrderForm';


function App() {
    const [mockData, setMockData] = useState([
        {
            "_id": "66a374596122a40616cb8599",
            "index": 0,
            "isBOTD": false,
            "Cost": "£39.26",
            "Image": "https://images.unsplash.com/photo-1672306319681-7b6d7ef349cf",
            "colour": "dark roast",
            "Name": "TURNABOUT",
            "Description": "Ipsum cupidatat nisi do elit veniam Lorem magna. Ullamco qui exercitation fugiat pariatur sunt dolore Lorem magna magna pariatur minim. Officia amet incididunt ad proident. Dolore est irure ex fugiat. Voluptate sunt qui ut irure commodo excepteur enim labore incididunt quis duis. Velit anim amet tempor ut labore sint deserunt.\r\n",
            "Country": "Peru"
        },
        {
            "_id": "66a374591a995a2b48761408",
            "index": 1,
            "isBOTD": false,
            "Cost": "£18.57",
            "Image": "https://images.unsplash.com/photo-1641399756770-9b0b104e67c1",
            "colour": "golden",
            "Name": "ISONUS",
            "Description": "Dolor fugiat duis dolore ut occaecat. Excepteur nostrud velit aute dolore sint labore do eu amet. Anim adipisicing quis ut excepteur tempor magna reprehenderit non ut excepteur minim. Anim dolore eiusmod nisi nulla aliquip aliqua occaecat.\r\n",
            "Country": "Vietnam"
        },
        {
            "_id": "66a374593ae6cb5148781b9b",
            "index": 2,
            "isBOTD": false,
            "Cost": "£33.87",
            "Image": "https://images.unsplash.com/photo-1522809269485-981d0c303355",
            "colour": "green",
            "Name": "ZILLAN",
            "Description": "Cillum nostrud mollit non ad dolore ad dolore veniam. Adipisicing anim commodo fugiat aute commodo occaecat officia id officia ullamco. Dolore irure magna aliqua fugiat incididunt ullamco ea. Aliqua eu pariatur cupidatat ut.\r\n",
            "Country": "Colombia"
        }
    ]); 
    const [data, setData] = useState([]); 
    const [apiState, setApiState] = useState();
    const [loadData, setLoadData] = useState(false);

    const [ModalState, setModalState] = useState(false);

    useEffect(() => {
        const getData = async () =>{
        setLoadData(true);
        try {
            const {data: response} = await axios.get('GetAllBeans');
            setData(response);         
        } catch (error) {
            console.error(error.message);
        }
        setLoadData(true);
    }

        getData();
        console.log('Data : ' + JSON.stringify(data));
    }, []);

    const ToggleFormOpen = () => {
        setModalState(true)
    }
    const ToggleFormClose = () => {
        setModalState(false)
    }
    return (
        <div className="App">
            <header class="title">
                <h3>All the beans</h3>
            </header>
            <TableRow>
                <Button 
                    variant="contained" 
                    disableElevation
                    onClick={() => {ToggleFormOpen()}}
                    >New Order</Button>
            </TableRow>
            <OrderForm formState={ModalState} ToggleFormClose={ToggleFormClose}/>
            <TableDisplay mockData={mockData} data={data}/>
        </div>
    );
}

export default App;
