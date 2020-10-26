import React from "react";
import { Avatar, Typography } from "@material-ui/core";

import useStyles from "./styles";

const MessageBlock = ({ sender, text, userId }) => {
  const classes = useStyles();
  const contentAlign = sender.id === userId ? "flex-end" : "flex-start";

  const getAvatarLetters = (sender) => {
    return sender
      ? sender.firstName && sender.lastName
        ? `${sender.firstName[0]}${sender.lastName[0]}`
        : sender.firstName[0]
      : "";
  };

  return (
    <div
      style={{
        width: "95%",
        display: "flex",
        justifyContent: contentAlign,
        alignItems: "flex-end",
        marginTop: "10px",
      }}
    >
      {sender.id !== userId && (
        <Avatar style={{ marginRight: "10px" }} className={classes.avatar}>
          {getAvatarLetters(sender)}
        </Avatar>
      )}
      <div className={classes.messageTextWrapper}>
        <Typography className={classes.messageText}>{text}</Typography>
      </div>
      {sender.id === userId && (
        <Avatar style={{ marginLeft: "10px" }} className={classes.avatar}>
          {getAvatarLetters(sender)}
        </Avatar>
      )}
    </div>
  );
};

export default MessageBlock;
