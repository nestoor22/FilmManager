import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import ConfirmContext from 'contexts/ConfirmContext';

import { useStyles } from './styles';

const FormButtons = ({
  cancelPath,
  actionLabel,
  form,
  onSubmitHandler,
  setOpenPopup,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const confirm = React.useContext(ConfirmContext);

  const onCancelHandler = () => {
    confirm({
      title: 'Are you sure you want to cancel?',
      confirmationText: 'Cancel',
      cancellationText: 'Back',
    })
      .then(() => {
        setOpenPopup(false);
        history.push({
          pathname: cancelPath,
        });
      })
      .catch(() => {});
  };

  return (
    <div className={classes.wrapper}>
      {cancelPath && (
        <Button
          variant="outlined"
          onClick={onCancelHandler}
          classes={{
            root: classes.cancelBtnRoot,
          }}
        >
          Cancel
        </Button>
      )}
      <Button
        type="submit"
        variant="contained"
        classes={{
          root: classes.actionBtnRoot,
        }}
        onClick={onSubmitHandler}
        form={form}
      >
        {actionLabel}
      </Button>
    </div>
  );
};

export default FormButtons;
