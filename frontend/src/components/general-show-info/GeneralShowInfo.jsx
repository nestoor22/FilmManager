import React from 'react';

import { useMutation, useQuery } from '@apollo/react-hooks';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Chip from '@material-ui/core/Chip';

import { EditIcon, RateShowForm } from 'components';

import useStyles from './styles';
import { SINGLE_SHOW } from '../../graphql/queries/shows';
import { SET_RATING } from '../../graphql/mutations/shows';
import { useSnackbar } from 'notistack';

function GeneralShowInfo({ showId }) {
  const classes = useStyles();

  const { data, refetch } = useQuery(SINGLE_SHOW, {
    variables: {
      id: showId,
    },
  });

  const [setRating] = useMutation(SET_RATING);
  const { enqueueSnackbar } = useSnackbar();

  const [userRating, setUserRating] = React.useState(undefined);

  const onRatingChange = (event, newValue) => {
    setUserRating(newValue);
  };

  const onSubmitHandler = () => {
    setRating({
      variables: {
        showRateInfo: {
          showId: showId,
          rating: userRating,
        },
      },
    }).then(() => {
      enqueueSnackbar('Done !', { variant: 'success' });
      refetch();
    });
  };

  const [openRateForm, setOpenRateForm] = React.useState(false);

  return (
    <div className={classes.root}>
      {data &&
        data.shows.map((show, index) => {
          return (
            <List key={index}>
              <ListSubheader className={classes.subheader}>Title</ListSubheader>
              <ListItem className={classes.title}>{show.title}</ListItem>
              <ListSubheader className={classes.subheader}>
                Release year
              </ListSubheader>
              <ListItem className={classes.description}>
                {show.releaseDate}
              </ListItem>
              <ListSubheader className={classes.subheader}>Plot</ListSubheader>
              <ListItem className={classes.description}>{show.plot}</ListItem>
              <ListSubheader className={classes.subheader}>
                Genres
              </ListSubheader>
              <div className={classes.tabsRoot}>
                {show.genres &&
                  show.genres.map((element, index) => {
                    return (
                      <Chip
                        key={index}
                        label={element.genreName}
                        className={classes.customChip}
                        variant="outlined"
                      />
                    );
                  })}
              </div>
              <div className={classes.ratingsWrapper}>
                <div className={classes.ratingBlock}>
                  <ListSubheader className={classes.subheader}>
                    IMDb rating
                  </ListSubheader>
                  <ListItem className={classes.description}>
                    {show.imdbRating ? show.imdbRating : 'No info'}
                  </ListItem>
                </div>
                <div className={classes.ratingBlock}>
                  <ListSubheader className={classes.subheader}>
                    WatchList users rating
                  </ListSubheader>
                  <ListItem className={classes.description}>
                    {show.usersRating ? show.usersRating : 'No info'}
                  </ListItem>
                </div>
                {data.isLoggedIn && (
                  <div className={classes.ratingBlock}>
                    <ListSubheader className={classes.subheader}>
                      Your rating
                    </ListSubheader>
                    <ListItem className={classes.description}>
                      {show.currentUserRating ? (
                        <div style={{ display: 'flex' }}>
                          <div>{show.currentUserRating}</div>
                          <div
                            className={classes.editIconWrapper}
                            onClick={() => setOpenRateForm(true)}
                          >
                            <EditIcon width={12} height={12} />
                          </div>
                        </div>
                      ) : (
                        <Typography
                          className={classes.rateTitle}
                          onClick={() => setOpenRateForm(true)}
                        >
                          Rate now
                        </Typography>
                      )}
                    </ListItem>
                  </div>
                )}
              </div>
              {openRateForm && (
                <RateShowForm
                  onChange={onRatingChange}
                  value={userRating}
                  setValue={setUserRating}
                  defaultValue={show.currentUserRating}
                  onSubmit={onSubmitHandler}
                />
              )}
            </List>
          );
        })}
    </div>
  );
}

export default GeneralShowInfo;
