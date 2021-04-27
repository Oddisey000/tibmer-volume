import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import BackspaceIcon from "@material-ui/icons/Backspace";

import CalculationTypes from "../calculation-types/calculation.types.component";
import { leftDrawerClose } from "../../../redux/app-reducer/app-reducer.actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const PersistentDrawerLeft = ({ appData, leftDrawerClose }) => {
  const selectedLanguage = appData.appReducer.appLanguage;
  const drawerStatus = appData.appReducer.clickAway;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(drawerStatus);

  const handleDrawerOpen = () => {
    leftDrawerClose(true);
    setOpen(drawerStatus ? true : true);
  };

  const handleDrawerClose = () => {
    leftDrawerClose(false);
    setOpen(drawerStatus ? false : false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerStatus
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawerStatus && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {appData.appReducer.languages[selectedLanguage].leftSide.appName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerStatus}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <BackspaceIcon color="secondary" />
            ) : (
              <BackspaceIcon color="secondary" />
            )}
          </IconButton>
        </div>
        <Divider />
        <CalculationTypes />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerStatus
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appData: { ...state }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    leftDrawerClose: (item) => dispatch(leftDrawerClose(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersistentDrawerLeft);
