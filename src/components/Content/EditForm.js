import React, { useState } from 'react';
import { makeStyles, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, InputLabel, Select, MenuItem, InputAdornment, Box } from '@material-ui/core';

const EditForm = ({ open, setOpen, editedVehicle, vehicles, setVehicles }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    vehicleName: '',
    odometer: 0,
    volume: 0
  })
  
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value
    setFormData({...formData})
  }

  const saveData = () => {
    vehicles.filter((vehicle, index) => {
      if(vehicle.id == editedVehicle.id){
        vehicles[index] = {
          ...vehicle,
          name: formData.vehicleName,
          km: formData.odometer,
          volume: formData.volume
        }
        setVehicles([...vehicles])
      }
    })
    setOpen(false)
  }

  return (
      <Dialog fullWidth maxWidth='md' open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Edit Fuel Entry
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <FormControl variant="outlined" color='secondary' className={classes.formControl}>
            <InputLabel>Vehicle</InputLabel>
            <Select
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              label="Vehicle"
            >
              <MenuItem value='Vehicle Name 0'>Vehicle Name 0</MenuItem>
              <MenuItem value='Vehicle Name 1'>Vehicle Name 1</MenuItem>
              <MenuItem value='Vehicle Name 2'>Vehicle Name 2</MenuItem>
              <MenuItem value='Vehicle Name 3'>Vehicle Name 3</MenuItem>
            </Select>
          </FormControl>
          {/* ======== */}
          <Box display='flex' alignItems='center'>
            <TextField  id="odometer" 
                        placeholder="Odometer" 
                        label="Odometer" 
                        name="odometer"
                        variant="outlined"
                        color='secondary'
                        classes={{
                          root: classes.textFieldRootOverride,
                        }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">
                            Kms
                          </InputAdornment>,
                        }} 
                        value={formData.odometer}
                        onChange={handleChange}
                        />
            <TextField  id="volume" 
                      placeholder="Volume" 
                      label="Volume" 
                      name='volume'
                      variant="outlined"
                      color='secondary'
                      classes={{
                        root: classes.textFieldRootOverride,
                      }}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">
                          Ltrs
                        </InputAdornment>,
                      }} 
                      value={formData.volume}
                      onChange={handleChange}
                      />            
          </Box>
          {/* ======== */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={saveData} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    margin: `${theme.spacing(1)} 0`
  },
  textFieldRootOverride: {
    width: '100%',
    margin: `${theme.spacing(1)} 0`
  }
}));

export default EditForm;
