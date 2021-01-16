import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
import Filters from 'components/Content/Filters'
import FuelInfo from 'components/Content/FuelInfo'
import VehiclesTable from 'components/Content/VehiclesTable'
import EditForm from 'components/Content/EditForm'

const Content = () => {
  const axios = require('axios').default;
  const classes = useStyles();
  const [vehicles, setVehicles] = useState([])
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles)
  const [openFormModal, setOpenFormModal] = useState(false)
  const [editedVehicle, setEditedVehicle] = useState(null)

  useEffect(() => {
    setFilteredVehicles(vehicles)
  }, [vehicles]);

  const editVehicle = (vehicle) => {
    setOpenFormModal(true);
    setEditedVehicle(vehicle)
  }

  const fetchVehicles = (url) => {
    axios.get(url)
    .then(function (response) {
      setVehicles([...response.data])
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
  }

  useEffect(() => {
    // the online data generator wasn't flexible enough to draw data relations so I only will generate vehicles and add some dates statically
    fetchVehicles(`https://mockend.com/HadeerFawzy/blink-fe-task/vehicles?limit=50&name_order=asc`)
  }, []);


  return (
    <div className={classes.contentRoot}>
      <Typography className={classes.contentTitle}>
        Fuel History
      </Typography>
      <Filters  vehicles={vehicles}
                setVehicles={setVehicles}
                setFilteredVehicles={setFilteredVehicles}/>
      <Divider />
      <FuelInfo />
      <VehiclesTable  vehicles={vehicles}
                      filteredVehicles={filteredVehicles}
                      setVehicles={setVehicles}
                      setFilteredVehicles={setFilteredVehicles}
                      editVehicle={editVehicle}/>
      <EditForm open={openFormModal}
                setOpen={setOpenFormModal}
                editedVehicle={editedVehicle}
                vehicles={vehicles}
                setVehicles={setVehicles}/>                
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  contentTitle: {
    fontSize: theme.typography.pxToRem(18),
    lineHeight: theme.spacing(2.75),
    color: theme.palette.typography.secondary
  }
}));

export default Content;
