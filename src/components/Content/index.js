import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import FuelInfo from 'components/Content/FuelInfo'

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentRoot}>
      <Typography className={classes.contentTitle}>
        Fuel History
      </Typography>
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
