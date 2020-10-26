import React from "react";
import { useLocation } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Cookies from "js-cookie";

const ChatContent = ({ userId }) => {
  const classes = useStyles();

  const location = useLocation();

  const [messagesList, setMessagesList] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [socket, setSocket] = React.useState();

  const params = new URLSearchParams(location.search);
  const chatId = params.get("id");

  const chatsRef = React.useRef(null);

  React.useEffect(() => {
    chatsRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const sendMessage = () => {
    socket.send(
      JSON.stringify({
        senderId: userId,
        message: message,
      })
    );
    setMessage("");
  };

  if (socket) {
    socket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setMessagesList(messagesList.concat(JSON.parse(data.message)));
    };
  }

  React.useEffect(() => {
    if (chatId && !socket) {
      const socketObj = new WebSocket(`ws://localhost:8000/ws/chat/${chatId}/`);
      setSocket(socketObj);
    }
  });

  React.useEffect(() => {
    const headers = new Headers();
    headers.append("X-CSRFToken", Cookies.get("csrftoken"));
    fetch(`http://localhost:8000/messages/?id=${chatId}`, {
      method: "GET",
      headers: headers,
      credentials: "include",
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        setMessagesList(messagesList.concat(data));
      });
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
              value={message}
              type={"text"}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
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
              <Button onClick={sendMessage} className={classes.sendBtn}>
                Send
              </Button>
            </div>
          </div>
          <div className={classes.messagesBlocks}>
            {messagesList?.map((messageObj, index) => {
              const sender = messageObj.sender[0];
              const contentAlign =
                sender.id === userId ? "flex-end" : "flex-start";
              return (
                <div
                  key={index}
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: contentAlign,
                  }}
                >
                  <div className={classes.messageTextWrapper}>
                    <Typography className={classes.messageText}>
                      {messageObj.text}
                    </Typography>
                  </div>
                </div>
              );
            })}
            <div ref={chatsRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatContent;
