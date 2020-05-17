import React from 'react';

import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';
import { Field, reduxForm } from 'redux-form';

import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { Input, FormButtons, TextInput, AsyncChipsInput } from 'components';

import { SHOWS_BY_NAME } from 'graphql/queries/shows';
import { CREATE_LIST } from 'graphql/mutations/lists';

import useStyles from './styles';

const initialValues = {
  listName: '',
  description: '',
  showsOnList: [],
};

const CreateListPopup = ({ open, onClose, boardId, listData, refetch }) => {
  const classes = useStyles();

  const [createList] = useMutation(CREATE_LIST);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = () => {
    createList({
      variables: {
        boardId: boardId,
        listName: listData.listName,
        description: listData.description,
        showsOnList: listData.showsOnList.map((show) => show.showId),
      },
    }).then(() => {
      enqueueSnackbar('List successfully created !', {
        variant: 'success',
      });
      onClose();
      refetch();
    });
  };

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
          name="listName"
          className={classes.input}
          component={Input}
        />
        <Field
          label="Description"
          name="description"
          className={classes.input}
          component={TextInput}
        />
        <Field
          label="Add movie/series to list"
          name="showsOnList"
          query={SHOWS_BY_NAME}
          queryName="shows"
          optionLabel="title"
          placeholder="Enter movie/series name"
          className={classes.input}
          component={AsyncChipsInput}
        />
      </div>
      <FormButtons
        actionLabel="Save"
        cancelPath={`${boardId}`}
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
