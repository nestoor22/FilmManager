import React from "react";
import { useLocation } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const ChatContent = () => {
  const classes = useStyles();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const chatId = params.get("id");

  React.useEffect(() => {
    if (chatId) {
      const chatSocket = new WebSocket(
        `ws://localhost:8000/ws/chat/${chatId}/`
      );
      chatSocket.onmessage = function (e) {
        const data = JSON.parse(e.data);
        document.querySelector("").value += data.message + "\n";
      };
    }
  }, []);

  return (
    <div className={classes.root}>
      {!chatId ? (
        <div className={classes.noSelectedChatBlock}>
          Please, select chat to start conversation
        </div>
      ) : (
        <div className={classes.messagesContent}>
          <div className={classes.inputMessageFieldWrapper}>
            <TextField
              type={"text"}
              multiline={true}
              className={classes.messageInputField}
              placeholder="Enter message"
              InputProps={{
                disableUnderline: true,
                style: { color: "#073947", fontSize: "13px" },
              }}
              classes={{
                root: classes.messageInputField,
                underline: classes.underline,
              }}
            />
            <div className={classes.optionsWrapper}>
              <Button onClick={() => {}} className={classes.sendBtn}>
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatContent;
