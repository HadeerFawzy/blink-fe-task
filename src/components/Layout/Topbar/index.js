import React from 'react';
import { fade, makeStyles, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import clsx from 'clsx';

const Topbar = ({ sidebarInfo }) => {
  const classes = useStyles({
    sidebarWidth: sidebarInfo.width
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const menuItems = [{
    id: '1',
    text: 'Profile',
    icon: <PersonOutlineIcon color='secondary'/>
  },{
    id: '2',
    text: 'Logout',
    icon: <ExitToAppIcon color='secondary'/>
  }]
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      getContentAnchorEl={null}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
      classes={{
        paper: classes.menuPaperOverride
      }}
    >
      { menuItems.map((item, index) => (
        <MenuItem onClick={handleProfileMenuClose} key={item.id}>
          {item.icon} 
          <span className={classes.menuItemText}>{item.text}</span>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" 
              color='transparent' 
              className={clsx(classes.appBar, {
                [classes.appBarShift]: sidebarInfo.toggle,
              })} >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="open drawer"
            onClick={sidebarInfo.onToggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            PLN Asset Management System
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            <IconButton aria-label="show 17 new notifications" color="secondary">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="secondary"
            >
              <Avatar alt="User Name" 
                      src="./assets/profile-picture.jpg" 
                      className={classes.userImg}>
                B
              </Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.common.white
  },
  appBarShift: {
    width: `100%`,
    marginLeft: (props) => props.sidebarWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: (props) => `calc(100% - ${props.sidebarWidth}px)`,
    }
  },
  title: {
    display: 'none',
    fontSize: theme.typography.pxToRem(20),
    lineHeight: theme.spacing(3),
    fontWeight: '300',
    color: theme.palette.typography.primary,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main
  },
  inputRoot: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(14),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    maxWidth: theme.spacing(7.5),
  },
  userImg: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    border: `${theme.spacing(0.5)} solid ${theme.palette.secondary.light}`
  },
  menuPaperOverride: {
    minWidth: theme.spacing(26.25),
  },
  menuItemText: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.spacing(2.125),
    color: theme.palette.typography.primary,
    marginLeft: theme.spacing(0.75), 
  }
}));

export default Topbar