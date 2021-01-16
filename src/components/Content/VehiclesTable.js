import React, { useEffect, useState } from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, Box, Avatar, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import EditForm from 'components/Content/EditForm'

const VehiclesTable = ({ vehicles, setVehicles, filteredVehicles, editVehicle }) => {
  const classes = useStyles();

  const [openFormModal, setOpenFormModal] = useState(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'vehicle', 
      label: 'Vehicle', 
      minWidth: 170 
    },
    { id: 'time', 
      label: 'Time', 
      minWidth: 50 
    },
    {
      id: 'km',
      label: 'Total km',
      minWidth: 50,
      align: 'right',
    },
    {
      id: 'volume',
      label: 'Volume',
      minWidth: 50,
      align: 'right',
    },
    {
      id: 'cost',
      label: 'Cost',
      minWidth: 50,
      align: 'right',
    },
    {
      id: 'actions',
      label: 'Actions',
      minWidth: 100,
      align: 'right',
    },
  ];

  const vehiclesDates = [
    'Mon, Jun 10, 2019',
    'Mon, Jun 09, 2019',
    'Mon, Jun 08, 2019',
    'Mon, Jun 07, 2019',
    'Mon, Jun 11, 2019',
    'Mon, Jun 12, 2019',
  ]

  const deleteVehicle = (vehicle) => {
    const filteredRows = vehicles.filter((row, index) => row.id !== vehicle.id  )
    setVehicles([...filteredRows])
  }

  // useEffect(() => {
  //   console.log(vehicles)
  // }, [vehicles]);

  const drawVehicleRow = (vehicle, date) => {
    console.log(vehicle, date)
    // const vehicleDate = vehiclesDates[Math.floor(Math.random() * vehiclesDates.length)]
    return (
      <>
        {vehicle.date === date &&
          <TableRow key={vehicle.id}>
            <TableCell key={columns[0].id} align={columns[0].align}>
              <Box display='flex'>
                <Avatar alt={vehicle.name}
                        src={`https://picsum.photos/id/${vehicle.id}/300/200`} 
                        className={classes.vehicleImg}>
                  {vehicle.name.charAt(0)}
                </Avatar>
                <Box ml={1}>
                  <Typography>
                    {vehicle.name}
                  </Typography>
                  <Typography className={ vehicle.status ? classes.activeStatus : classes.outStatus}>
                    {vehicle.status ? 'Active' : 'Out of Service'} 
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell key={columns[1].id} align={columns[1].align}>
              <Box>
                {`${Math.floor(Math.random() * 12) + 1}:00`} 
                { vehicle.status ? 'AM' : 'PM' }
              </Box>
            </TableCell>
            <TableCell key={columns[2].id} align={columns[2].align}>
              <Box>
                {vehicle.km} km
              </Box>
            </TableCell>
            <TableCell key={columns[3].id} align={columns[3].align}>
              {vehicle.volume} L
            </TableCell>
            <TableCell key={columns[4].id} align={columns[4].align}>
              RP {vehicle.cost}
            </TableCell>
            <TableCell key={columns[5].id} align={columns[5].align}>
              <IconButton onClick={() => editVehicle(vehicle)}>
                <CreateIcon className={classes.editIcon}/>
              </IconButton>
              <IconButton onClick={() => deleteVehicle(vehicle)}>
                <DeleteIcon  color='error'/>
              </IconButton>
            </TableCell>
          </TableRow>
        }
      </>
    )
  }

  return (
    <Paper className={classes.root}>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredVehicles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
            { filteredVehicles.length > 0 ? 
                <TableBody>
                  {vehiclesDates.map((date, dateIndex) => (
                    <React.Fragment key={date.id}>
                        <TableRow className={classes.vDate} key={date.id}>
                          <TableCell colSpan={6}>{date}</TableCell>
                        </TableRow>
                        { filteredVehicles.map((row, index) =>  {
                            row.date = Math.floor(Math.random() * vehiclesDates.length)
                            return (
                              <> {drawVehicleRow(row, dateIndex)} </>
                            )
                        })} 
                    </React.Fragment>
                  ))}
                </TableBody>
              : 
                  <TableRow>
                    <TableCell colSpan={6} align='center'>
                      <img className={classes.loader} src='./assets/loader.gif'/>
                    </TableCell>
                  </TableRow>
                
            }
            {/* {vehicles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((mainRow) => {
              
            })} */}
        </Table>
      </TableContainer>
      <EditForm open={openFormModal}
                setOpen={setOpenFormModal}/> 
    </Paper>
  );
}

const useStyles = makeStyles((theme) =>  ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  vDate: {
    backgroundColor: theme.palette.primary.lightt
  },
  activeStatus: {
    color: theme.palette.success.main
  },
  outStatus: {
    color: theme.palette.warning.main
  },
  editIcon: {
    color: theme.palette.warning.main
  },
  loader: {
    width: theme.spacing(40)
  }
}));

export default VehiclesTable;