import React, { useState } from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
import Filters from 'components/Content/Filters'
import FuelInfo from 'components/Content/FuelInfo'
import VehiclesTable from 'components/Content/VehiclesTable'

const Content = () => {
  const classes = useStyles();
  const [vehicles, setVehicles] = useState([])

  return (
    <div className={classes.contentRoot}>
      <Typography className={classes.contentTitle}>
        Fuel History
      </Typography>
      <Filters  vehicle={vehicles}
                setVehicles={setVehicles}/>
      <Divider />
      <FuelInfo />
      <VehiclesTable  vehicles={vehicles}
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
