import React from 'react';

import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';
import { Field, reduxForm } from 'redux-form';

import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import {
  Input,
  FormButtons,
  ColorButtonsGroup,
  RadioButtonsGroup,
  ChipsInput,
  TextInput,
} from 'components';

import { CREATE_COLLECTION } from 'graphql/mutations/boards';
import { getPreparedBoardDataForCreation } from 'utils/getPreparedBoardDataForCreation';

import useStyles from './styles';

const initialValues = {
  name: '',
  type: 'Private',
  invitedFriends: [],
  team: '',
  tags: [],
  description: '',
};
const CreateCollectionPopUp = ({
  open,
  onClose,
  boardData,
  refetch,
  listCreation,
}) => {
  const classes = useStyles();
  const [createCollection] = useMutation(CREATE_COLLECTION);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = () => {
    const preparedData = getPreparedBoardDataForCreation(boardData);
    createCollection({
      variables: {
        collection: {
          ...preparedData,
          collectionType: listCreation ? 'list' : 'board',
        },
      },
    }).then(() => {
      onClose(false);
      enqueueSnackbar('Your collection created !', { variant: 'success' });
      refetch();
    });
  };

  return (
    <Dialog open={open} classes={{ paper: classes.creationPopUp }}>
      <div className={classes.creationPopUpHeader}>
        <IconButton className={classes.closeBtn} onClick={onClose}>
          <HighlightOffIcon className={classes.closeIcon} />
        </IconButton>
        <Typography className={classes.title}>
          Create new {listCreation ? 'list' : 'board'}
        </Typography>
      </div>
      <div className={classes.formWrapper}>
        <Field
          label={listCreation ? 'List name' : 'Board name'}
          name="name"
          className={classes.input}
          component={Input}
        />
        <Field
          label={listCreation ? 'List type' : 'Board type'}
          name="type"
          list={['Private', 'Public']}
          className={classes.input}
          component={RadioButtonsGroup}
        />
        <Field
          label="Invite friends"
          name="invitedFriends"
          placeholder="Add emails. Hit Enter to add"
          className={classes.input}
          component={ChipsInput}
        />
        <Field
          label="Tags"
          name="tags"
          placeholder="Add tags. Hit Enter to add"
          className={classes.input}
          component={ChipsInput}
        />
        <Field
          label="Description"
          name="description"
          placeholder={`Tell something about this ${
            listCreation ? 'list' : 'board'
          } ...`}
          className={classes.input}
          component={TextInput}
        />
      </div>
      <FormButtons
        actionLabel="Save"
        cancelPath="/boards"
        setOpenPopup={onClose}
        onSubmitHandler={onSubmit}
      />
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    boardData: state.form.boardForm.values,
  };
};

export default reduxForm({
  form: 'boardForm',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  touchOnBlur: false,
  initialValues,
})(connect(mapStateToProps, null)(CreateCollectionPopUp));
