import React from 'react';

import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  AppHeader,
  ChipsInput,
  CreateBoardPopUp,
  CustomSliderField,
  Input,
} from 'components';

import { BOARDS } from 'graphql/queries/boards';
import { SET_LAST_VISITED_BOARD } from 'graphql/mutations/boards';

import useStyles from './styles';
import CustomCheckBoxField from '../../components/custom-checkbox-fields/CustomCheckBoxField';

const initialValues = {
  tags: [],
  followers: [0, 999999],
  rating: [0, 10],
  showsNumbers: [0, 9999999],
  showTypes: [],
  ownerTypes: [],
};

const Boards = () => {
  const classes = useStyles();
  document.body.style.backgroundColor = '#BAC7CB';

  const history = useHistory();
  const [openCreationPopup, setOpenCreationPopup] = React.useState(false);
  const [isTeamBoard, setIsTeamBoard] = React.useState(false);
  const [setLastVisitedBoard] = useMutation(SET_LAST_VISITED_BOARD);

  const { data, refetch } = useQuery(BOARDS);

  const handleClosePopup = () => {
    setOpenCreationPopup(false);
  };

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.contentWrapper}>
        <div className={classes.filtersSidebar}>
          <Typography className={classes.filterHeader}>
            Search by tags:
          </Typography>
          <Field
            name="tags"
            className={classes.inputChips}
            placeholder="Enter tag and hit Enter"
            component={ChipsInput}
          />
          <Typography
            style={{ marginTop: '40px' }}
            className={classes.filterHeader}
          >
            Followers range:
          </Typography>
          <Field
            name="followers"
            classStyle={classes.sliderField}
            ariaLabelledBy="range-slider"
            component={CustomSliderField}
          />
          <Typography
            style={{ marginTop: '40px' }}
            className={classes.filterHeader}
          >
            Rating range:
          </Typography>
          <Field
            name="rating"
            classStyle={classes.sliderField}
            ariaLabelledBy="range-slider"
            component={CustomSliderField}
          />
          <Typography
            style={{ marginTop: '40px' }}
            className={classes.filterHeader}
          >
            Movies/series number range:
          </Typography>
          <Field
            name="showsNumbers"
            classStyle={classes.sliderField}
            ariaLabelledBy="range-slider"
            component={CustomSliderField}
          />
          <div className={classes.checkboxFiltersWrapper}>
            <div style={{ marginRight: '140px' }}>
              <Typography
                style={{ marginTop: '40px' }}
                className={classes.filterHeader}
              >
                Board type:
              </Typography>
              <Field
                name="showTypes"
                values={['open', 'private']}
                component={CustomCheckBoxField}
              />
            </div>
            <div>
              <Typography
                style={{ marginTop: '40px' }}
                className={classes.filterHeader}
              >
                Owner type:
              </Typography>
              <Field
                name="ownerTypes"
                values={['personal', 'community', 'random']}
                component={CustomCheckBoxField}
              />
            </div>
          </div>
        </div>
      </div>
      <CreateBoardPopUp
        open={openCreationPopup}
        onClose={handleClosePopup}
        isTeamBoard={isTeamBoard}
        refetch={refetch}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    boardFilter: state.form.boardFilter.values,
  };
};

export default reduxForm({
  form: 'boardFilter',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
})(connect(mapStateToProps, null)(Boards));
