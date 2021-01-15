import React, { useState } from 'react';
import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Hidden, Typography, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const Sidebar = ({ sidebarInfo }) => {
  const classes = useStyles({
    sidebarWidth: sidebarInfo.width
  });

  const [sidebarItems, setSidebarItems] = useState([{
    id: 0,
    text: 'DASHBOARD',
    icon: <AvTimerOutlinedIcon color='secondary'/>,
    path: '#'
  },{
    id: 1,
    text: 'ASSETS',
    icon: <TableChartOutlinedIcon color='secondary'/>,
    path: '#',
    subItems: [{
      id: 2,
      text: 'Non-Consumable Assets'
    },{
      id: 3,
      text: 'Consumable Assets'
    },{
      id: 4,
      text: 'Requests'
    }],
    toggleSubMenu: false,
  },{
    id: 5,
    text: 'VEHICLES',
    icon: <DriveEtaOutlinedIcon color='secondary'/>,
    path: '#',
    subItems: [{
      id: 10,
      text: 'Test Multiple Nested'
    }],
    toggleSubMenu: false,
  },{
    id: 6,
    text: 'PHONE CREDIT',
    icon: <PhoneIphoneOutlinedIcon color='secondary'/>,
    path: '#',
  },{
    id: 7,
    text: 'REPORT',
    icon: <DescriptionOutlinedIcon color='secondary'/>,
    path: '#',
  },{
    id: 8,
    text: 'PEOPLE',
    icon: <PersonOutlineOutlinedIcon color='secondary'/>,
    path: '#',
  },{
    id: 9,
    text: 'SETTINGS',
    icon: <SettingsOutlinedIcon color='secondary'/>,
    path: '#',
  }])

  const onToggleSubMenu = (id) => {
    const clickedItem = sidebarItems.find(item => item.id === id);
    clickedItem.toggleSubMenu = clickedItem.toggleSubMenu ? false : true
    setSidebarItems([...sidebarItems])
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={sidebarInfo.toggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.sidebarHeader}>
          <img src='./assets/logo.svg' alt='PLN Asset Management System'/> 
          <Hidden mdUp>
            <Typography className={classes.appName}>
              PLN Asset Management System
            </Typography>
            <IconButton className={classes.closeIcon} onClick={sidebarInfo.onToggleSidebar}>
              <CloseIcon/>
            </IconButton>
          </Hidden>
        </div>
        <List>
          {sidebarItems.map((item, index) => (
            <div key={`${item.id}${item.text}`}>
              <ListItem button 
                        key={`${item.id}${item.text}`} 
                        onClick={item.subItems ? () => onToggleSubMenu(item.id) : null}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary={item.text} />
              </ListItem>
              { item.subItems &&
                  <Collapse in={item.toggleSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      { item.subItems.map((subItem, index) => (
                        <ListItem key={`${subItem.id}${subItem.text}`} button className={classes.listSubItem}>
                          <ListItemText primary={subItem.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
              } 
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (props) => props.sidebarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: (props) => props.sidebarWidth,
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center'
    }
  },
  appName: {
    marginLeft: theme.spacing(1),
  },
  closeIcon: {
    padding: 0
  },
  listItemText: {
    color: theme.palette.typography.secondary,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.spacing(2.125),
    letterSpacing: '0.3',
    textTransform: 'uppercase'
  },
  listSubItem: {
    paddingLeft: theme.spacing(2.5),
    color: theme.palette.typography.secondary,
    fontSize: theme.typography.pxToRem(14),
  },
}));

export default Sidebar;