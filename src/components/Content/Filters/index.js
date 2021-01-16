import React, { useState } from 'react';
import { makeStyles, TextField, InputAdornment, Box, Button, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';

const Filters = ({ vehicles, setVehicles, setFilteredVehicles }) => {
  const classes = useStyles();

  const [searchText, setSearchText] = useState('')

  const filterVehicles = (searchText) => {
    if(searchText !== '') {
      const filterVehicles = vehicles.filter((vehicle, index) => (
        vehicle.name.toLowerCase().includes(searchText)
      ))
      setFilteredVehicles([...filterVehicles])
    } else {
      setFilteredVehicles([...vehicles])
    }
  }

  const handleSearchChange = (e) => {
    if(e.target.value == '') {
      setFilteredVehicles([...vehicles])
    } else {
      setSearchText(e.target.value)
    }
  }

  return (
    <Box className={classes.filtersRoot} my={3}>
      {/* Calendar Goes Here */}
      
      {/* Search Text Fiels */}
      <Box display='flex' alignItems='stretch'>
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
                    }} 
                    value={searchText}
                    onChange={handleSearchChange}/>

        <Button onClick={ () => filterVehicles(searchText)} variant="outlined" 
                color="primary" startIcon={<FilterListIcon />}>
          Filter
        </Button>
      </Box>

      <Box display='flex' alignItems='stretch'>
        <Typography color='primary' className={clsx(classes.filtersNumber, classes.fontSize14)}>
          1 Filter 
          <span className={classes.appliedText}> &nbsp; Applied </span>
        </Typography>

        <Button onClick={() => setVehicles([])} 
                color="primary" 
                className={clsx(classes.clearAll, classes.fontSize14)}>
          Clear All
        </Button>
      </Box>
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
    marginRight: theme.spacing(1)
  },
  filtersNumber: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2)
  },
  fontSize14: {
    fontSize: theme.typography.pxToRem(14)
  },
  appliedText: {
    color: theme.palette.secondary.main
  }
}));

export default Filters;
