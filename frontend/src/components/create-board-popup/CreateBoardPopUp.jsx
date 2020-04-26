import React from "react";

import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Input from "../input/Input";
import FormButtons from "../form-buttons/FormButtons";
import ColorButtonsGroup from "../color-buttons/ColorButtons";
import RadioButtonsGroup from "../radio-buttons/RadioButtons";

import { CREATE_BOARD } from "../../graphql/mutations/boards";
import { getPreparedBoardDataForCreation } from "../../utils/getPreparedBoardDataForCreation";

import useStyles from "./styles";

const initialValues = {
  name: "",
  color: "",
  type: "Private",
};
const CreationPopUp = ({ open, onClose, boardData, refetch }) => {
  const classes = useStyles();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = () => {
    const preparedData = getPreparedBoardDataForCreation(boardData);
    createBoard({ variables: { board: { ...preparedData } } }).then(() => {
      onClose(false);
      enqueueSnackbar("Your board created !", { variant: "success" });
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
          list={["Private", "Public"]}
          className={classes.input}
          component={RadioButtonsGroup}
        />
        <Field
          label="Background color"
          name="color"
          list={[
            "#02522a",
            "#000",
            "#ff551a",
            "#f21ada",
            "#dd4455",
            "#dc6705",
            "#3e2d3b",
            "#051c92",
            "#4c0505",
            "#55fff3",
            "#fdd321",
            "#07ad7f",
            "#4b4646",
            "#075c9c",
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
  form: "boardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
})(connect(mapStateToProps, null)(CreationPopUp));
