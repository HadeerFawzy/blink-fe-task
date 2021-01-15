import React from 'react';
import { ThemeProvider, makeStyles, CssBaseline } from "@material-ui/core";
import clsx from 'clsx';
import theme from "./config/theme";
import Layout from './components/Layout';

const App = () => {
  
  const sidebarWidth = 240;
  const [toggleSidebar, setToggleSidebar] = React.useState(false);
  const onToggleSidebar = () => {
    setToggleSidebar(toggleSidebar ? false : true);
  };
  const sidebarInfo = {
    width: sidebarWidth,
    toggle: toggleSidebar,
    onToggleSidebar: onToggleSidebar
  }

  const classes = useStyles({
    sidebarWidth: sidebarInfo.width
  });
  
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appRoot}>
        <CssBaseline />
        <Layout sidebarInfo={sidebarInfo}/>
        <div className={clsx(classes.content, {
                [classes.contentShift]: sidebarInfo.toggle,
              })}> 
          <div className={classes.sidebarHeader} />
                Content Goes here
        </div>
      </div>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: (props) => -props.sidebarWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: '0 !important',
    }
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

export default App;
