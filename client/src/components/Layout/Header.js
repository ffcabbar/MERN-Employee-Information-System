import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Person,
  AssignmentInd,
  School,
  ContactPhone,
  EmojiObjects,
  VpnKey,
  MyLocation,
} from "@material-ui/icons";
import {
  UserInfo,
  PersonelInfo,
  AddressInfo,
  EducationInfo,
  ContactInfo,
  TaskInfo,
  EmployeeQuery,
} from "../User/index";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(null);

  // For props
  const [empQuery, setEmpQuery] = useState();
  const [perNo, setPerNo] = useState();
  const [tcNo, setTCNo] = useState();

  console.log(empQuery, "Props geliyor mu?");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { userData, setUserData } = useContext(UserContext);

  const logoutUser = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });

    localStorage.setItem("auth-token", "");
  };

  const showUserInfo = () => {
    setShow("userinfo");
  };

  const showPersonelInfo = () => {
    setShow("personelinfo");
  };

  const showAddressInfo = () => {
    setShow("addressinfo");
  };

  const showEducationInfo = () => {
    setShow("educationinfo");
  };

  const showContactInfo = () => {
    setShow("contactinfo");
  };

  const showTaskInfo = () => {
    setShow("taskinfo");
  };

  const employeeQuery = () => {
    setShow("employeequery");
  };

  let content = null;

  switch (show) {
    case "employeequery":
      content = (
        <EmployeeQuery
          setEmpQuery={setEmpQuery}
          perNo={perNo}
          setPerNo={setPerNo}
          tcNo={tcNo}
          setTCNo={setTCNo}
        />
      );
      break;

    case "userinfo":
      content = <UserInfo perNo={perNo} tcNo={tcNo} />;
      break;

    case "personelinfo":
      content = <PersonelInfo perNo={perNo} tcNo={tcNo} />;
      break;

    case "addressinfo":
      content = <AddressInfo perNo={perNo} tcNo={tcNo} />;
      break;

    case "educationinfo":
      content = <EducationInfo perNo={perNo} tcNo={tcNo} />;
      break;

    case "contactinfo":
      content = <ContactInfo perNo={perNo} tcNo={tcNo} />;
      break;

    case "taskinfo":
      content = <TaskInfo />;
      break;

    default:
      content = <h3>Please query the employee you want to see by typing perNo and tcNo from the menu on the left...</h3>;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {userData.user ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
          ) : null}

          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Employee Information System
            </Link>
          </Typography>
          {userData.user ? (
            <Button color="inherit" onClick={logoutUser}>
              Logout
            </Button>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Button color="inherit">Login</Button>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Button color="inherit">Register</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={employeeQuery}>
            <ListItemIcon>
              <VpnKey />
            </ListItemIcon>
            <ListItemText primary={"Employee Query"} />
          </ListItem>
          {empQuery === "S" ? (
            <>
              <ListItem button onClick={showUserInfo}>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary={"User"} />
              </ListItem>
              <ListItem button onClick={showPersonelInfo}>
                <ListItemIcon>
                  <AssignmentInd />
                </ListItemIcon>
                <ListItemText primary={"Personel"} />
              </ListItem>
              <ListItem button onClick={showAddressInfo}>
                <ListItemIcon>
                  <MyLocation />
                </ListItemIcon>
                <ListItemText primary={"Address"} />
              </ListItem>
              <ListItem button onClick={showEducationInfo}>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary={"Education"} />
              </ListItem>
              <ListItem button onClick={showContactInfo}>
                <ListItemIcon>
                  <ContactPhone />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
              </ListItem>
              <ListItem button onClick={showTaskInfo}>
                <ListItemIcon>
                  <EmojiObjects />
                </ListItemIcon>
                <ListItemText primary={"Tasks"} />
              </ListItem>
            </>
          ) : null}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {userData.user ? content : null}
      </main>
    </div>
  );
}
