import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { COLLECTION } from 'graphql/queries/collections';
import { AppHeader } from 'components';
import CollectionInfoSidebar from './components/InfoSidebar';

import useStyles from './styles';

const OpenList = () => {
  const classes = useStyles();
  const { id } = useParams();

  const { data, refetch } = useQuery(COLLECTION, {
    variables: { collectionId: id, collectionType: 'list' },
  });

  return (
    <div className={classes.root}>
      <AppHeader />
      {data && (
        <div className={classes.contentWrapper}>
          <CollectionInfoSidebar collectionData={data?.collection} />
        </div>
      )}
    </div>
  );
};

export default OpenList;
