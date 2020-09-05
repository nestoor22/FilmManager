import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

import { DeleteIcon, AddItemToListSearch } from 'components';
import { ADD_SHOW_TO_LIST } from 'graphql/mutations/lists';

import useStyles from './styles';

const ShowsList = ({ list, index }) => {
  const classes = useStyles();

  const [addShowToList] = useMutation(ADD_SHOW_TO_LIST);
  const [showAddItem, setShowAddItem] = React.useState(false);
  const [showsOnList, setShowsOnList] = React.useState(list?.showsOnList);

  const handleAddItemToList = (item) => {
    addShowToList({
      variables: {
        listId: list.id,
        showId: item.showId,
      },
    }).then(() => {});
    setShowsOnList(showsOnList.concat(item));
  };

  return (
    <div key={index} className={classes.list}>
      <div className={classes.listTitle}>
        <Typography className={classes.itemsListHeader}>{list.name}</Typography>
      </div>
      {showsOnList?.map((showOnList) => {
        return (
          <div className={classes.showInfo}>
            <CardMedia
              className={classes.poster}
              component="img"
              alt="Poster"
              height="80"
              width="60"
              image={showOnList.show?.posterUrl || showOnList.posterUrl}
              title="Poster"
            />
            <Typography className={classes.showTitle}>
              {showOnList.show?.title || showOnList.title}
            </Typography>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={classes.iconWrapper}
              disableTouchRipple={true}
              disableFocusRipple={true}
            >
              <DeleteIcon fill={'#E9F0F2'} />
            </IconButton>
          </div>
        );
      })}
      {showAddItem && (
        <AddItemToListSearch addItemToList={handleAddItemToList} />
      )}
      <div className={classes.addNewItemBtn}>
        <Button
          onClick={() => setShowAddItem(!showAddItem)}
          className={classes.button}
          size="small"
        >
          {!showAddItem && (
            <AddCircleOutlineIcon
              style={{ marginRight: '5px', fontSize: '15px' }}
              fill={'#BAC7CB'}
            />
          )}
          {!showAddItem ? 'Add new item' : 'Close search'}
        </Button>
      </div>
    </div>
  );
};

export default ShowsList;
