import React from 'react';
import { 
    Typography,
    Box,
    Modal, 
    Button,
    TableRow,
    TextField,
    FormLabel}
from '@mui/material';
import Grid from '@mui/material/Grid';


function OrderForm({formData, formState, ToggleFormClose}) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Modal
                open={formState}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                New form details
            </Typography>
            <TableRow>
                <br/>
                <br/>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <TextField id="filled-basic" label="Name" variant="filled" />
                    </Grid>
                    <Grid size={4}>
                      <TextField id="filled-basic" label="Name" variant="filled" />
                    </Grid>
                    <Grid size={4}>
                     <TextField id="filled-basic" label="Name" variant="filled" />
                    </Grid>                  
                </Grid>
            </TableRow>
            <br/>
            <br/>
            <TableRow>
                <br/>
                <br/>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <Button align="right" variant="contained" >Save</Button>
                    </Grid>
                    <Grid size={4}>
                        {/*Blacnk space*/}
                    </Grid>
                    <Grid size={4}>
                        <Button 
                            align="right" 
                            variant="contained" 
                            onClick={() => {ToggleFormClose()}}
                        >
                            Close</Button>
                    </Grid>    
                    <Grid size={4}>
                        {/*Blacnk space*/}
                    </Grid>               
                </Grid>
            </TableRow>
            </Box>
            </Modal>       
        </>
    );
}

export default OrderForm;
