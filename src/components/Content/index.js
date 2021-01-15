import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
import Filters from 'components/Content/Filters'
import FuelInfo from 'components/Content/FuelInfo'

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentRoot}>
      <Typography className={classes.contentTitle}>
        Fuel History
      </Typography>
      <Filters/>
      <Divider />
      <FuelInfo/>
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
