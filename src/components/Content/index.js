import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
import Filters from 'components/Content/Filters'
import FuelInfo from 'components/Content/FuelInfo'
import VehiclesTable from 'components/Content/VehiclesTable'

const Content = () => {
  const classes = useStyles();
  const [vehicles, setVehicles] = useState([])
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles)

  useEffect(() => {
    setFilteredVehicles(vehicles)
  }, [vehicles]);

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
                      setFilteredVehicles={setFilteredVehicles}/>
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
