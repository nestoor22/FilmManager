import React from "react";
import Cookies from "js-cookie";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ReplyIcon from "@material-ui/icons/Reply";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatIcon from "@material-ui/icons/Chat";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";

import { AccountInfoModal } from "components";

import useStyles from "./styles";

const Header = ({ chatHeader, userInfo }) => {
  const classes = useStyles();
  const componentRef = React.useRef();

  const [buttonWidth, setButtonWidth] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAccountInfo, setOpenAccountInfo] = React.useState(false);

  React.useEffect(() => {
    setButtonWidth(componentRef?.current?.offsetWidth);
  }, [windowWidth]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleLogout = () => {
    const headers = new Headers();
    headers.append("X-CSRFToken", Cookies.get("csrftoken"));
    fetch("http://localhost:8000/logOut/", {
      method: "GET",
      headers: headers,
      credentials: "include",
    }).then(() => {
      window.location.replace("http://localhost:8000/admin/");
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (e) => {
    const value = e.target.value;
    if (value === 2) {
      setOpenAccountInfo(true);
    }
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.menuWrapper}>
        <Button
          ref={componentRef}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.menuBtn}
        >
          ShareWithMe
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            style: {
              width: buttonWidth,
              borderRadius: 0,
              boxShadow: "-2px 2px 5px 0px rgba(95,135,146,1)",
            },
          }}
        >
          <MenuItem
            value={0}
            className={classes.menuItem}
            onClick={handleSelectItem}
          >
            <ChatIcon className={classes.icon} />
            New chat
          </MenuItem>
          <MenuItem
            value={1}
            className={classes.menuItem}
            onClick={handleSelectItem}
          >
            <ContactsIcon className={classes.icon} />
            Contacts
          </MenuItem>
          <MenuItem
            value={2}
            className={classes.menuItem}
            onClick={handleSelectItem}
          >
            <SettingsIcon className={classes.icon} />
            Settings
          </MenuItem>
          <MenuItem
            value={3}
            className={classes.menuItem}
            onClick={handleSelectItem}
          >
            <InfoIcon className={classes.icon} />
            About
          </MenuItem>
        </Menu>
      </div>
      <div className={classes.headerActionsWrapper}>
        <Button className={classes.headerBtn}>{chatHeader}</Button>
        <Button
          onClick={() => {
            window.location.replace("https://google.com");
          }}
          className={classes.headerActionBtn}
        >
          <ReplyIcon style={{ fill: "#073947", marginRight: "5px" }} />
          To website
        </Button>
        <Button
          onClick={() => handleLogout()}
          className={classes.headerActionBtn}
        >
          <ExitToAppIcon style={{ fill: "#073947", marginRight: "5px" }} />
          Logout
        </Button>
      </div>
      {openAccountInfo && (
        <AccountInfoModal
          open={openAccountInfo}
          setOpen={setOpenAccountInfo}
          userInfo={userInfo}
        />
      )}
    </div>
  );
};

export default Header;
