import React from 'react';
import { 
    Typography,
    Box,
    Modal, 
    Button,
    TableRow,
    TextField,
    FormLabel,
    ListItem,   
    Paper,
    TextareaAutosize}
from '@mui/material';
import Grid from '@mui/material/Grid';


function DetailWindow({formData, formState, ToggleFormClose}) {
    console.log(formData);
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
                <h4>{formData[0].Name}</h4>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {formData.Name}
            </Typography>
            <br/>
            <TableRow>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <Paper variant="outlined">
                            <img 
                                src={formData[0].Image} 
                                style={{height:'100px', width:'100px', borderRadius: '10px'}}
                                />
                        </Paper>
                    </Grid>
                    <Grid size={8}>
                        <TextareaAutosize
                            maxRows={7}
                            aria-label="maximum height"
                            placeholder="Content here"
                            defaultValue={formData[0].Description}
                            style={{ width: 250 }}
                        />
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
                        <Button 
                            align="right" 
                            variant="contained" 
                            onClick={() => {ToggleFormClose()}}
                        >
                            Close</Button>
                    </Grid>    
                    <Grid size={4}>
                        {/*Blank space*/}
                    </Grid>
                    <Grid size={4}>
                        {/*Blank space*/}
                    </Grid>    
                    <Grid size={4}>
                        {/*Blank space*/}
                    </Grid>               
                </Grid>
            </TableRow>
            </Box>
            </Modal>       
        </>
    );
}

export default DetailWindow;
