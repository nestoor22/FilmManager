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

  const { data, refetch } = useQuery(BOARDS, {
    variables: {
      openBoards: true,
    },
  });

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
            Movies/series number range: {}
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
        <div className={classes.boardTilesWrapper}>
          {data &&
            data?.boards.map((boardInfo) => {
              return <BoardCard boardInfo={boardInfo} />;
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
