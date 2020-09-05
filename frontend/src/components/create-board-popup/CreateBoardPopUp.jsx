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

import { CREATE_BOARD } from 'graphql/mutations/boards';
import { getPreparedBoardDataForCreation } from 'utils/getPreparedBoardDataForCreation';

import useStyles from './styles';

const initialValues = {
  name: '',
  color: '',
  type: 'Private',
  invitedFriends: [],
  team: '',
  tags: [],
  description: '',
};
const CreateBoardPopUp = ({ open, onClose, boardData, refetch }) => {
  const classes = useStyles();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = () => {
    const preparedData = getPreparedBoardDataForCreation(boardData);
    createBoard({ variables: { board: { ...preparedData } } }).then(() => {
      onClose(false);
      enqueueSnackbar('Your board created !', { variant: 'success' });
      refetch();
    });
  };

  return (
    <Dialog open={open} classes={{ paper: classes.creationPopUp }}>
      <div className={classes.creationPopUpHeader}>
        <IconButton className={classes.closeBtn} onClick={onClose}>
          <HighlightOffIcon className={classes.closeIcon} />
        </IconButton>
        <Typography className={classes.title}>Create new board</Typography>
      </div>
      <div className={classes.formWrapper}>
        <Field
          label="Board name"
          name="name"
          className={classes.input}
          component={Input}
        />
        <Field
          label="Board type"
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
          placeholder="Tell something about this board..."
          className={classes.input}
          component={TextInput}
        />
        <Field
          label="Background color"
          name="color"
          list={[
            '#02522a',
            '#000',
            '#ff551a',
            '#f21ada',
            '#dd4455',
            '#dc6705',
            '#3e2d3b',
            '#051c92',
            '#4c0505',
            '#55fff3',
            '#fdd321',
            '#07ad7f',
            '#4b4646',
            '#075c9c',
          ]}
          className={classes.input}
          component={ColorButtonsGroup}
          radioGroupRootClass={classes.radioGroupRootClass}
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
})(connect(mapStateToProps, null)(CreateBoardPopUp));
