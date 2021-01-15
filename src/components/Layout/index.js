import React from 'react';
import { makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ sidebarInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.layoutRoot}>
      <div className={classes.topbarWrapper}>
        <Topbar sidebarInfo={sidebarInfo}/>
      </div>
      <div className={classes.sidebarWrapper}>
        <Sidebar sidebarInfo={sidebarInfo}/>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  layoutRoot: {

  },
  topbarWrapper: {

  },
  sidebarWrapper: {

  },
}));

export default Layout;
