import React, {useState} from 'react';
import { 
    Table, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody,
    Button} 
from '@mui/material';
import Paper from '@mui/material/Paper';
import DetailWindow from './DetailWindow';

function TableDisplay({data, mockData}) {

    const [ModalState, setModalState] = useState(false);
    const ToggleFormOpen = () => {
        setModalState(true)
    }
    const ToggleFormClose = () => {
        setModalState(false)
    }

    return (
        <div className="App">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Colour</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Cost</TableCell>
                        <TableCell align="right">Expand</TableCell>
                        </TableRow>
                    </TableHead>     
                    {/*Data fetched from api and passed in as data to table body which loads daily*/}
                    <TableBody>
                        {
                            mockData.map((beans) => (
                            <TableRow
                                key={beans.Name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {beans.Name}
                                </TableCell>
                            <TableCell align="right">{beans.colour}</TableCell>
                            <TableCell align="right">{beans.Country}</TableCell>
                            <TableCell align="right">{beans.Cost}</TableCell>
                            <TableCell align="right">
                                <Button  variant="contained" 
                                    disableElevation
                                    onClick={() => {ToggleFormOpen()}}
                                >
                                    Detail
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        <DetailWindow formData={mockData} formState={ModalState} ToggleFormClose={ToggleFormClose}/>
                    </TableBody>
                    {
                        /*
                        <TableRow
                                key={beans.Name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {beans.name}
                                </TableCell>
                            <TableCell align="right">{beans.colour}</TableCell>
                            <TableCell align="right">{beans.country}</TableCell>
                            <TableCell align="right">{beans.cost}</TableCell>
                            <TableCell align="right">
                                <Button  variant="contained" 
                                    disableElevation
                                    onClick={() => {}}
                                >
                                    Detail
                                </Button>
                            </TableCell>
                            </TableRow>
                        
                        */
                    }
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableDisplay;
