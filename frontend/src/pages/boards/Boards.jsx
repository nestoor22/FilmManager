import React from 'react';

import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Field, reduxForm, reset } from 'redux-form';
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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const initialValues = {
  tags: [],
  followers: [0, 9999],
  rating: [0, 10],
  showsNumber: [0, 999],
  boardType: [],
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Boards = ({ boardFilter, reset }) => {
  const classes = useStyles();
  document.body.style.backgroundColor = '#BAC7CB';

  const history = useHistory();

  const [openCreationPopup, setOpenCreationPopup] = React.useState(false);
  const [isTeamBoard] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    reset('boardFilter');
  };

  const { data, refetch } = useQuery(BOARDS, {
    variables: {
      userBoards: value === 1,
    },
  });

  const handleClosePopup = () => {
    setOpenCreationPopup(false);
  };

  const handleSubmitFilters = () => {
    refetch({
      userBoards: value === 1,
      filters: boardFilter,
    });
  };

  React.useEffect(() => {
    refetch({
      userBoards: value === 1,
      filters: boardFilter,
    });
  }, [value]);

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
          <AppBar
            position="static"
            color="default"
            className={classes.tabSwitcher}
          >
            <Tabs
              classes={{
                root: classes.tabs,
                indicator: classes.indicator,
              }}
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                classes={{
                  root: classes.tabs,
                }}
                label="All boards"
                {...a11yProps(0)}
              />
              <Tab
                classes={{
                  root: classes.tabs,
                }}
                label="Following boards"
                {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>
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
})(connect(mapStateToProps, { reset })(Boards));
