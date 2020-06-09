import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ItemCard, Pagination } from 'components';

import useStyles from './styles';

function ItemsList({ query, showType, orderBy, order }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const pageHandler = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const orderParam = order === 'desc' ? `-${orderBy}` : orderBy

  const { data } = useQuery(query, {
    variables: {
      showType: showType,
      page: page - 1,
      orderBy: orderParam
    },
  });

  return (
    <div className={classes.itemsRoot}>
      {data &&
        data.shows &&
        data.shows.map((show, index) => {
          return <ItemCard key={index} showInfo={show} />;
        })}
      {data && (
        <Pagination
          page={page}
          onChange={pageHandler}
          count={data.showsNumberOfPages}
        />
      )}
    </div>
  );
}

export default ItemsList;
