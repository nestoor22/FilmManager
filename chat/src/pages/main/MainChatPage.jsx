import React from "react";

import useStyles from "./styles";
import {Header, Sidebar} from "components";

const MainChatPage = () => {
  const classes = useStyles();
  const chatSocket = new WebSocket("ws://localhost:8000/ws/chat/test/");
  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    document.querySelector("#chat-log").value += data.message + "\n";
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Header />
        <div className={classes.chatsWrapper}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainChatPage;
