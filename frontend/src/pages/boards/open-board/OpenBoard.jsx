import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory, useParams } from "react-router-dom";

import AppHeader from "../../../components/app-header/AppHeader";
import { BOARD } from "../../../graphql/queries/boards";

import useStyles from "./styles";

const OpenBoard = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data } = useQuery(BOARD, { variables: { boardId: id } });

  React.useEffect(() => {
    if (data) {
      document.body.style.backgroundColor = data.board.backgroundColor;
    }
  }, [data]);

  return (
    <div className={classes.root}>
      <AppHeader />
      {data && data.board && (
        <div className={classes.content}>
          <div style={{ color: "#fff" }} className={classes.subHeader}>
            {data.board.name}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenBoard;
