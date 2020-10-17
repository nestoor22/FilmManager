import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import { Header, Sidebar } from "components";

import useStyles from "./styles";

const MainChatPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const chatSocket = new WebSocket("ws://localhost:8000/ws/chat/test/");
  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    document.querySelector("#chat-log").value += data.message + "\n";
  };

  React.useEffect(() => {
    const headers = new Headers();
    headers.append("X-CSRFToken", Cookies.get("csrftoken"));
    fetch("http://localhost:8000/user/", {
      method: "GET",
      headers: headers,
      credentials: "include",
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data.length !== 0) {
          setUser(data[0]);
        } else {
          history.push("signIn/");
        }
        setLoading(false);
      });
  }, []);

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
      {!loading && (
        <div className={classes.content}>
          <Header />
          <div className={classes.chatsWrapper}>
            <Sidebar userId={user?.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainChatPage;
