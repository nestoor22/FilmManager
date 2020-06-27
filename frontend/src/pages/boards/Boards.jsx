import React from 'react';

import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import {
  AppHeader,
  ChipsInput,
  CreateBoardPopUp,
  CustomSliderField,
} from 'components';

import { BOARDS } from 'graphql/queries/boards';

import CustomCheckBoxField from '../../components/custom-checkbox-fields/CustomCheckBoxField';
import BoardCard from '../../components/board-card/BoardCard';

import useStyles from './styles';
import Button from '@material-ui/core/Button';

const initialValues = {
  tags: [],
  followers: [0, 9999],
  rating: [0, 10],
  showsNumber: [0, 999],
  boardType: [],
};

const Boards = ({ boardFilter }) => {
  const classes = useStyles();
  document.body.style.backgroundColor = '#BAC7CB';

  const history = useHistory();

  const [openCreationPopup, setOpenCreationPopup] = React.useState(false);
  const [isTeamBoard] = React.useState(false);

  const { data, refetch } = useQuery(BOARDS, {
    variables: {
      openBoards: true,
    },
  });

  const handleClosePopup = () => {
    setOpenCreationPopup(false);
  };

  const handleSubmitFilters = () => {
    refetch({
      filters: boardFilter,
    });
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
            step={100}
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
            step={0.1}
            component={CustomSliderField}
          />
          <Typography
            style={{ marginTop: '40px' }}
            className={classes.filterHeader}
          >
            Movies/series number range:
          </Typography>
          <Field
            name="showsNumber"
            step={10}
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
                name="boardType"
                values={['open', 'private']}
                component={CustomCheckBoxField}
              />
            </div>
          </div>
          <Button
            variant="contained"
            className={classes.filterBtn}
            onClick={handleSubmitFilters}
          >
            Apply Filter
          </Button>
        </div>
        <div className={classes.boardTilesWrapper}>
          {data &&
            data?.boards.map((boardInfo, index) => {
              return <BoardCard key={index} boardInfo={boardInfo} />;
            })}
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
