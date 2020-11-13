import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { COLLECTION } from 'graphql/queries/collections';
import { AppHeader } from 'components';
import ShowsList from '../../../components/shows-list/ShowsList';

import useStyles from './styles';
import CollectionInfoSidebar from './components/InfoSidebar';

const OpenBoard = () => {
  const classes = useStyles();
  const { id } = useParams();

  const { data, refetch } = useQuery(COLLECTION, {
    variables: { collectionId: id, collectionType: 'board' },
  });

  const [lists, setLists] = React.useState([]);

  React.useEffect(() => {
    if (data?.collection?.lists) {
      setLists(data?.collection?.lists);
    }
  }, [data?.collection?.lists]);

  return (
    <div className={classes.root}>
      <AppHeader />
      {data && (
        <div className={classes.contentWrapper}>
          <CollectionInfoSidebar
            collectionData={data?.collection}
            lists={lists}
            setLists={setLists}
          />
          <div className={classes.listsContent}>
            {lists?.map((list, index) => {
              return (
                <ShowsList
                  boardId={data.collection.id}
                  list={list}
                  index={index}
                  canAddItems={data.collection.canEdit}
                  refetch={refetch}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenBoard;
