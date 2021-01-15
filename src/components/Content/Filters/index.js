import React from 'react';
import { makeStyles, TextField, InputAdornment, Box, Button, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import theme from 'config/theme';
import clsx from 'clsx';

const Filters = () => {
  const classes = useStyles();

  return (
    <Box className={classes.filtersRoot} my={3}>
      {/* Calendar Goes Here */}
      
      {/* Search Text Fiels */}
      <TextField  id="search" 
                  size="small" 
                  placeholder="Search vehicles" 
                  variant="outlined"
                  color='secondary'
                  classes={{
                    root: classes.textFieldRootOverride,
                  }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <SearchIcon/>
                    </InputAdornment>,
                  }} />

      <Button variant="outlined" color="primary" startIcon={<FilterListIcon />}>
        Filter
      </Button>

      <Typography color='primary' className={clsx(classes.filtersNumber, classes.fontSize14)}>
        1 Filter 
        <Box color={theme.palette.secondary.main}> &nbsp; Applied </Box>
      </Typography>

      <Button color="primary" className={clsx(classes.clearAll, classes.fontSize14)}>
        Clear All
      </Button>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  filtersRoot: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  textFieldRootOverride: {
    backgroundColor: theme.palette.common.white,
  },
  filtersNumber: {
    display: 'flex',
    alignItems: 'center',
  },
  fontSize14: {
    fontSize: theme.typography.pxToRem(14)
  }
  
}));

export default Filters;
