import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";

import AppHeader from "../../../components/app-header/AppHeader";
import { BOARD } from "../../../graphql/queries/boards";

import useStyles from "./styles";
import PopoverWrapper from "../../../components/popover-wrapper/PopoverWrapper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";

const OpenBoard = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [copied, setCopied] = React.useState(false);
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
        <div className={classes.subHeader}>
          <Typography className={classes.boardName}>
            {data.board.name}
          </Typography>
          <PopoverWrapper text={"Copy share link"}>
            <CopyToClipboard
              text={data.board.name}
              onCopy={() => setCopied(true)}
            >
              <ShareIcon />
            </CopyToClipboard>
          </PopoverWrapper>
        </div>
      )}
      {data && data.board && (
        <div className={classes.lists}>
          <div className={classes.list}></div>
          <Button classes={{ root: classes.createNewButton }}>
            <div className={classes.addNewCard}>
              <AddCircleOutlineIcon className={classes.addNewIcon} />
              <Typography className={classes.createNewButtonText}>
                Create new
              </Typography>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default OpenBoard;
