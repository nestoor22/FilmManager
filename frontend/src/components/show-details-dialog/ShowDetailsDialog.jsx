import React from "react";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DialogTitle from "@material-ui/core/DialogTitle";
import useStyles from "./styles";
import CardMedia from "@material-ui/core/CardMedia";

const ShowDetailsDialog = ({ open, show, onClose }) => {
  const classes = useStyles();

  if (Object.keys(show).length === 0) {
    return null;
  }

  return (
    <Dialog open={open} classes={{ paper: classes.paper }}>
      <IconButton className={classes.closeBtn} onClick={onClose}>
        <HighlightOffIcon className={classes.closeIcon} />
      </IconButton>
      {show && (
        <div className={classes.dialogContent}>
          <CardMedia
            component="img"
            alt="Poster"
            height="250"
            width="185"
            image={show.posterUrl}
            title="Poster"
          />
          <DialogTitle
            id="alert-dialog-title"
            classes={{ root: classes.title }}
            disableTypography={true}
          >
            {show.title}
          </DialogTitle>
        </div>
      )}
    </Dialog>
  );
};

export default ShowDetailsDialog;
