import React from 'react';

import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';
import { Field, reduxForm } from 'redux-form';

import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { Input, FormButtons } from 'components';

import useStyles from './styles';

const initialValues = {
  name: '',
  showsOnList: [],
};

const CreateListPopup = ({ open, onClose, boardId, listData, refetch }) => {
  const classes = useStyles();
  console.log(listData);

  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    refetch();
  });
  const onSubmit = () => {};

  return (
    <Dialog open={open} classes={{ paper: classes.creationPopUp }}>
      <div className={classes.creationPopUpHeader}>
        <IconButton className={classes.closeBtn} onClick={onClose}>
          <HighlightOffIcon className={classes.closeIcon} />
        </IconButton>
        <Typography className={classes.title}>Add new list</Typography>
      </div>
      <div className={classes.formWrapper}>
        <Field
          label="List name"
          name="name"
          className={classes.input}
          component={Input}
        />
      </div>
      <FormButtons
        actionLabel="Save"
        cancelPath={`boards/${boardId}`}
        setOpenPopup={onClose}
        onSubmitHandler={onSubmit}
      />
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    listData: state.form.listForm.values,
  };
};

export default reduxForm({
  form: 'listForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
})(connect(mapStateToProps, null)(CreateListPopup));
