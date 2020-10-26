import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import MessageBlock from "./components/message-block/MessageBlock";
import { Notification } from "./components/notification/Notification";

import useStyles from "./styles";

toast.configure();

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
    if (chatsRef.current) {
      chatsRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
      const messageObj = JSON.parse(data.message);
      setMessagesList(messagesList.concat(messageObj));
      if (messageObj.length !== 0) {
        if (messageObj[0].sender[0].id !== userId) {
          toast(messageObj[0].text);
        }
      }
    };
  }

  React.useEffect(() => {
    if (chatId && !socket) {
      const socketObj = new WebSocket(`ws://localhost:8000/ws/chat/${chatId}/`);
      setSocket(socketObj);
    }
  });

  React.useEffect(() => {
    if (chatId) {
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
    }
  }, [chatId]);

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
              return (
                <MessageBlock
                  key={index}
                  sender={messageObj.sender[0]}
                  text={messageObj.text}
                  userId={userId}
                />
              );
            })}
            <div ref={chatsRef} />
          </div>
        </div>
      )}
      <Notification />
    </div>
  );
};

export default ChatContent;
