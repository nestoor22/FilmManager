import React from "react";
import { useLocation } from "react-router-dom";

import useStyles from "./styles";

const ChatContent = () => {
  const classes = useStyles();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const chatId = params.get("id");

  const chatSocket = new WebSocket("ws://localhost:8000/ws/chat/test/");
  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    document.querySelector("").value += data.message + "\n";
  };

  return <div>ijohybjhnk</div>;
};

export default ChatContent;
