import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { COLLECTION } from 'graphql/queries/collections';
import { AddItemToListSearch, AppHeader, ItemCard } from 'components';
import CollectionInfoSidebar from './components/InfoSidebar';

import { ADD_SHOW_TO_LIST } from 'graphql/mutations/lists';

import useStyles from './styles';

const OpenList = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [addShowToList] = useMutation(ADD_SHOW_TO_LIST);
  const [showAddItem, setShowAddItem] = React.useState(false);

  const { data, refetch } = useQuery(COLLECTION, {
    variables: { collectionId: id, collectionType: 'list' },
  });
  const [showsOnList, setShowsOnList] = React.useState([]);

  const handleAddItemToList = (item) => {
    addShowToList({
      variables: {
        listId: id,
        showId: item.showId,
      },
    }).then(() => {});
    setShowsOnList(showsOnList.concat(item));
  };

  React.useEffect(() => {
    if (data?.collection?.shows) {
      setShowsOnList(data?.collection?.shows);
    }
  }, [data]);
  console.log(showsOnList);
  return (
    <div className={classes.root}>
      <AppHeader />
      {data && (
        <div className={classes.contentWrapper}>
          <CollectionInfoSidebar
            displayAddNewItem={showAddItem}
            showAddNewItem={setShowAddItem}
            collectionData={data?.collection}
          />
          <div className={classes.listItems}>
            {showAddItem && (
              <div className={classes.searchWrapper}>
                <div
                  style={{
                    minWidth: '50%',
                    height: 'fit-content',
                    minHeight: 'fit-content',
                    '&:last-child': {
                      marginRight: 0,
                    },
                    position: 'relative',
                  }}
                >
                  <AddItemToListSearch addItemToList={handleAddItemToList} />
                </div>
              </div>
            )}
            {showsOnList.map((showInfo) => {
              return <ItemCard showInfo={showInfo} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenList;
