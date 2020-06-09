import React from 'react';

import Typography from '@material-ui/core/Typography';

import { AppHeader, ItemsList } from 'components';
import { SHOWS } from 'graphql/queries/shows';

import AscendingOrderIcon from 'assets/icons/ascending-order.svg';
import DescendingOrderIcon from 'assets/icons/descending-order.svg';

import useStyles from './styles';

const SeriesPage = () => {
  const classes = useStyles();

  const [ascendingOrder, setAscendingOrder] = React.useState(false);
  const [orderBy, setOrderBy] = React.useState('show_id');

  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#BAC7CB';

  const changeOrderHandler = (newOrderBy) => {
    if (newOrderBy === orderBy) {
      setAscendingOrder(!ascendingOrder);
    } else {
      setAscendingOrder(false);
      setOrderBy(newOrderBy);
    }
  };
  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.sortByWrapper}>
        <Typography className={classes.sortByTitle}>Sort by:</Typography>
        <div
          onClick={() => changeOrderHandler('show_id')}
          className={classes.defaultSortingWrapper}
        >
          <Typography className={classes.sortingTitle}>Default</Typography>
          {orderBy === 'show_id' &&
            (ascendingOrder ? (
              <img src={AscendingOrderIcon} alt="" />
            ) : (
              <img src={DescendingOrderIcon} alt="" />
            ))}
        </div>
        <div
          onClick={() => changeOrderHandler('title')}
          className={classes.nameSortingWrapper}
        >
          <Typography className={classes.sortingTitle}>Name</Typography>
          {orderBy === 'title' &&
            (ascendingOrder ? (
              <img src={AscendingOrderIcon} alt="" />
            ) : (
              <img src={DescendingOrderIcon} alt="" />
            ))}
        </div>
        <div
          onClick={() => changeOrderHandler('imdb_rating')}
          className={classes.imdbSortingWrapper}
        >
          <Typography className={classes.sortingTitle}>IMDb rating</Typography>
          {orderBy === 'imdb_rating' &&
            (ascendingOrder ? (
              <img src={AscendingOrderIcon} alt="" />
            ) : (
              <img src={DescendingOrderIcon} alt="" />
            ))}
        </div>
        <div
          onClick={() => changeOrderHandler('users_rating')}
          className={classes.ratingSortingWrapper}
        >
          <Typography className={classes.sortingTitle}>Rating</Typography>
          {orderBy === 'users_rating' &&
            (ascendingOrder ? (
              <img src={AscendingOrderIcon} alt="" />
            ) : (
              <img src={DescendingOrderIcon} alt="" />
            ))}
        </div>
        <div
          onClick={() => changeOrderHandler('release_date')}
          className={classes.dateSortingWrapper}
        >
          <Typography className={classes.sortingTitle}>Date</Typography>
          {orderBy === 'release_date' &&
            (ascendingOrder ? (
              <img src={AscendingOrderIcon} alt="" />
            ) : (
              <img src={DescendingOrderIcon} alt="" />
            ))}
        </div>
        <div
          onClick={() => changeOrderHandler('show_id')}
          className={classes.popularitySortingWrapper}
        >
          <Typography className={classes.sortingTitle}>
            Lists popularity
          </Typography>
          {orderBy === 'show_id' &&
            (ascendingOrder ? (
              <img src={AscendingOrderIcon} alt="" />
            ) : (
              <img src={DescendingOrderIcon} alt="" />
            ))}
        </div>
      </div>
      <div className={classes.contentRoot}>
        <ItemsList
          query={SHOWS}
          order={ascendingOrder ? 'asc' : 'desc'}
          orderBy={orderBy}
          showType={'serie'}
        />
      </div>
    </div>
  );
};

export default SeriesPage;
