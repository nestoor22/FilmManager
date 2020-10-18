import React from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import { Avatar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import useStyles from "./styles";

const Sidebar = ({ userId, handleSelectChat }) => {
  const classes = useStyles();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const chatId = params.get("id");

  const [loading, setLoading] = React.useState(true);
  const [chatsPreview, setChatsPreview] = React.useState([]);

  React.useEffect(() => {
    const headers = new Headers();
    headers.append("X-CSRFToken", Cookies.get("csrftoken"));
    fetch("http://localhost:8000/chats/", {
      method: "GET",
      headers: headers,
      credentials: "include",
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        setChatsPreview(data);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (chatId && chatsPreview.length) {
      handleSelectChat(
        chatsPreview.find((chatInfo) => chatInfo.chatId === chatId)
      );
    }
  }, [chatId, chatsPreview.length]);

  const getAvatarLetters = (chatInfo) => {
    const member = chatInfo.members.find(
      (member) => parseInt(member.id) !== parseInt(userId)
    );

    return member
      ? member.firstName && member.lastName
        ? `${member.firstName[0]}${member.lastName[0]}`
        : member.firstName[0]
      : "";
  };
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
      {!loading && chatsPreview.length === 0 && (
        <Button onClick={() => {}} className={classes.startNewChatBtn}>
          You don't have any chat yet. Click to start new
        </Button>
      )}

      {chatsPreview.map((chatInfo, index) => {
        return (
          <div
            key={index}
            onClick={() => handleSelectChat(chatInfo)}
            className={classes.chatItemWrapper}
            style={{
              background: chatInfo.chatId === chatId ? "#BEE5F1" : "none",
            }}
          >
            {!chatInfo.isGroup && (
              <Avatar className={classes.avatar}>
                {getAvatarLetters(chatInfo)}
              </Avatar>
            )}
            <div className={classes.chatInfo}>
              <Typography className={classes.title}>
                {chatInfo.chatName}
              </Typography>
              <Typography className={classes.lastMessage}>
                {chatInfo.lastMessage}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
