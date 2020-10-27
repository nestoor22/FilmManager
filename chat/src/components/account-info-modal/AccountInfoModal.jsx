import React from "react";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useStyles from "./styles";
import { Avatar, Typography } from "@material-ui/core";

const AccountInfoModal = ({ userInfo, open, setOpen }) => {
  const classes = useStyles();
  const getAvatarLetters = () => {
    return userInfo
      ? userInfo.firstName && userInfo.lastName
        ? `${userInfo.firstName[0]}${userInfo.lastName[0]}`
        : userInfo.firstName[0]
      : "";
  };
  return (
    <Dialog open={open} classes={{ paper: classes.paper }}>
      <IconButton
        className={classes.closeBtn}
        onClick={() => {
          setOpen(false);
        }}
      >
        <HighlightOffIcon className={classes.closeIcon} />
      </IconButton>
      <div className={classes.generalInfo}>
        <Avatar className={classes.avatar}>{getAvatarLetters()}</Avatar>
        <Typography className={classes.userName}>
          {userInfo.firstName} {userInfo.lastName}
        </Typography>
      </div>
    </Dialog>
  );
};

export default AccountInfoModal;
