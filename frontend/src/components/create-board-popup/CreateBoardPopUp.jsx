import React from "react";

import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";

const CreationPopUp = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} classes={{ paper: classes.creationPopUp }}>
      <div className={classes.creationPopUpHeader}>
        <IconButton className={classes.closeBtn} onClick={onClose}>
          <HighlightOffIcon className={classes.closeIcon} />
        </IconButton>
        <Typography className={classes.title}>Create new board</Typography>
      </div>
    </Dialog>
  );
};

export default CreationPopUp;
