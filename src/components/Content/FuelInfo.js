import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const FuelInfo = ( ) => {
  const classes = useStyles();

  // this better to be calculated later from the total of the items
  const fuelInfo = [{
    id: 0,
    value: 'Rp 1.575.000',
    type: 'Total Fuel Cost'
  },{
    id: 1,
    value: '293,65 L',
    type: 'Total Fuel Volume'
  },{
    id: 2,
    value: '38.046 km',
    type: 'Total km'
  },{
    id: 3,
    value: 'MPG (US)',
    type: 'Avg. Fuel Economy'
  },{
    id: 4,
    value: 'Rp 9,879',
    type: 'Cost/Liter'
  },]

  return (
    <Box  className={classes.fuelInfoRoot} 
          display='flex' 
          alignItems="center"
          justifyContent='space-between'
          my={3}>
      { fuelInfo.map((info, index) => (
          <Box key={info.id} className={classes.infoBox}>
            <Typography className={classes.infoValue}>
              {info.value}
            </Typography>
            <Typography className={classes.infoType}>
              {info.type}
            </Typography>
          </Box>
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  fuelInfoRoot: {
    flexFlow: 'row wrap',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row nowrap',
    }
  },
  infoBox: {
    width: '50%',
  },
  infoValue: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: '300',
    lineHeight: theme.spacing(3),
    color: theme.palette.typography.info
  },
  infoType: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.spacing(3),
    color: theme.palette.typography.secondary
  }
}));

export default FuelInfo;
