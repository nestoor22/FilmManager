import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { useStyles } from './styles';

const ConfirmationDialog = ({
  open,
  options,
  onClose,
  onCancel,
  onConfirm,
}) => {
  const classes = useStyles();

  const {
    title,
    description,
    warningText,
    confirmationText,
    cancellationText,
  } = options;

  return (
    <Dialog open={open} classes={{ paper: classes.paper }}>
      <IconButton className={classes.closeBtn} onClick={onClose}>
        <HighlightOffIcon className={classes.closeIcon} />
      </IconButton>
      {title && (
        <DialogTitle
          id="alert-dialog-title"
          classes={{ root: classes.title }}
          disableTypography={true}
        >
          {title}
        </DialogTitle>
      )}
      <DialogContent classes={{ root: classes.contentRoot }}>
        <DialogContentText
          id="alert-dialog-description"
          classes={{ root: classes.contentTextRoot }}
        >
          {description}
        </DialogContentText>
        {warningText && (
          <DialogContentText
            id="alert-dialog-description"
            classes={{ root: classes.contentTextRoot }}
          >
            {warningText}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions classes={{ root: classes.actionsRoot }}>
        {cancellationText && (
          <Button
            onClick={onCancel}
            variant="outlined"
            classes={{ root: classes.cancelBtnRoot }}
          >
            {cancellationText}
          </Button>
        )}
        <Button
          onClick={onConfirm}
          variant="outlined"
          classes={{ root: classes.actionBtnRoot }}
          autoFocus
        >
          {confirmationText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
