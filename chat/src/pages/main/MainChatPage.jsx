import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import { Header, Sidebar, ChatContent } from "components";

import useStyles from "./styles";

const MainChatPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

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

  const handleSelectChat = (chatId) => {
    history.push({ pathName: `chat/`, search: `?id=${chatId}` });
  };

  return (
    <div className={classes.root}>
      {!loading && (
        <div className={classes.content}>
          <Header />
          <div className={classes.chatsWrapper}>
            <Sidebar handleSelectChat={handleSelectChat} userId={user?.id} />
            <ChatContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainChatPage;
