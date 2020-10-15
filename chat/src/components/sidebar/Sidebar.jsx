import React from "react";
import Cookies from "js-cookie";

import { Avatar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";

import useStyles from "./styles";
import InputAdornment from "@material-ui/core/InputAdornment";

const Sidebar = () => {
  const classes = useStyles();
  React.useEffect(() => {
    const headers = new Headers();
    headers.append("X-CSRFToken", Cookies.get("csrftoken"));
    fetch("http://localhost:8000/chats/", {
      method: "GET",
      headers: headers,
      credentials: "include",
    }).then();
  }, []);


  return (
    <div className={classes.root}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Input
          disableUnderline={true}
          id="input-with-icon-adornment"
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            focused: classes.inputRootFocused,
            input: classes.input,
            disabled: classes.disabledInput,
          }}
          startAdornment={
            <InputAdornment className={classes.iconWrapper}>
              <SearchIcon style={{ fill: "#0997B6" }} fill="#0997B6" />
            </InputAdornment>
          }
        />
      </div>
      <div className={classes.chatItemWrapper}>
        <Avatar className={classes.avatar}>YN</Avatar>
        <div className={classes.chatInfo}>
          <Typography className={classes.title}>Yaroslav Nestor</Typography>
          <Typography className={classes.lastMessage}>Teest</Typography>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
