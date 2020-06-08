import React from 'react';

import Typography from '@material-ui/core/Typography';

import { AppHeader, ItemsList } from 'components';
import { SHOWS } from 'graphql/queries/shows';

import useStyles from './styles';

const MoviesPage = () => {
  const classes = useStyles();

  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#BAC7CB';

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.sortByWrapper}>
        <Typography className={classes.sortByTitle}>Sort by:</Typography>
        <div className={classes.defaultSortingWrapper}>
          <Typography className={classes.sortingTitle}>Default</Typography>
        </div>
        <div className={classes.nameSortingWrapper}>
          <Typography className={classes.sortingTitle}>Name</Typography>
        </div>
        <div className={classes.imdbSortingWrapper}>
          <Typography className={classes.sortingTitle}>IMDb rating</Typography>
        </div>
        <div className={classes.ratingSortingWrapper}>
          <Typography className={classes.sortingTitle}>Rating</Typography>
        </div>
        <div className={classes.dateSortingWrapper}>
          <Typography className={classes.sortingTitle}>Date</Typography>
        </div>
        <div className={classes.popularitySortingWrapper}>
          <Typography className={classes.sortingTitle}>
            Lists popularity
          </Typography>
        </div>
      </div>
      <div className={classes.contentRoot}>
        <ItemsList query={SHOWS} showType={'film'} />
      </div>
    </div>
  );
};

export default MoviesPage;
