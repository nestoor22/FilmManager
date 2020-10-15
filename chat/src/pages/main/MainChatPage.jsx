import React from "react";
import Cookies from "js-cookie";
import { Header, Sidebar } from "components";

import useStyles from "./styles";

const MainChatPage = () => {
  const classes = useStyles();
  const chatSocket = new WebSocket("ws://localhost:8000/ws/chat/test/");
  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    document.querySelector("#chat-log").value += data.message + "\n";
  };
  //
  // React.useEffect(() => {
  //   const headers = new Headers();
  //   headers.append("X-CSRFToken", Cookies.get("csrftoken"));
  //   fetch("http://localhost:8000/startChat/", {
  //     method: "POST",
  //     headers: headers,
  //     credentials: "include",
  //     body: JSON.stringify({ contactId: 13 }),
  //   });
  // }, []);

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
