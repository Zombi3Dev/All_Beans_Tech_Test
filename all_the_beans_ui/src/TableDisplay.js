import React from 'react';
import { 
    Table, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TableCell } 
from '@mui/material';
import Paper from '@mui/material/Paper';

function TableDisplay({data}) {
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
                        </TableRow>
                    </TableHead>     

                </Table>
            </TableContainer>
        </div>
    );
}

export default TableDisplay;
