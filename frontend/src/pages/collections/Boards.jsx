import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
  AppHeader,
  ChipsInput,
  CreateBoardPopUp,
  CustomSliderField,
} from 'components';

import { COLLECTIONS } from 'graphql/queries/collections';
import CustomCheckBoxField from '../../components/custom-checkbox-fields/CustomCheckBoxField';
import CollectionCard from '../../components/board-card/CollectionCard';

import useStyles from './styles';

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

  document.body.style.backgroundImage = 'none';
  document.body.style.background = 'rgb(7,57,71)';
  document.body.style.background =
    'linear-gradient(45deg, rgba(7,57,71,1) 0%, rgba(41,94,109,1) 9%, rgba(186,199,203,1) 100%)';

  const [openCreationPopup, setOpenCreationPopup] = React.useState(false);
  const [listCreation, setListCreation] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    reset('boardFilter');
  };

  const { data, refetch } = useQuery(COLLECTIONS, {
    fetchPolicy: 'no-cache',
    variables: {
      userCollections: value === 2,
      userFollowedCollections: value === 1,
    },
  });

  const handleClosePopup = () => {
    setOpenCreationPopup(false);
  };

  const handleSubmitFilters = () => {
    refetch({
      userFollowedCollections: value === 1,
      userBoards: value === 2,
      filters: boardFilter,
    });
  };

  React.useEffect(() => {
    refetch({
      userFollowedCollections: value === 1,
      userCollections: value === 2,
    });
  }, [value, refetch]);

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.contentWrapper}>
        {value !== 2 && (
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
                  Collection type:
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
        )}
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
              indicatorColor={'primary'}
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
                label="All collections"
                {...a11yProps(0)}
              />
              <Tab
                classes={{
                  root: classes.tabs,
                }}
                label="Following collections"
                {...a11yProps(1)}
              />
              <Tab
                classes={{
                  root: classes.tabs,
                }}
                label="Your collections"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          {value === 2 && (
            <div className={classes.btnsWrapper}>
              <Button
                className={classes.createNowText}
                onClick={() => {
                  setListCreation(false);
                  setOpenCreationPopup(!openCreationPopup);
                }}
              >
                Create board
              </Button>
              <Button
                className={classes.createNowText}
                onClick={() => {
                  setListCreation(true);
                  setOpenCreationPopup(!openCreationPopup);
                }}
              >
                Create simple list
              </Button>
            </div>
          )}
          {data?.collections.length === 0 && value === 2 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '200px',
              }}
            >
              <h4>You haven't created any collection yet.</h4>
            </div>
          )}
          {data &&
            data?.collections.map((collectionInfo, index) => {
              return (
                <CollectionCard
                  refetch={refetch}
                  key={index}
                  collectionInfo={collectionInfo}
                />
              );
            })}
        </div>
      </div>
      {openCreationPopup && (
        <CreateBoardPopUp
          open={openCreationPopup}
          onClose={handleClosePopup}
          refetch={refetch}
          listCreation={listCreation}
        />
      )}
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
