import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import { DeleteIcon, AddItemToListSearch } from 'components';
import { ADD_SHOW_TO_LIST, CREATE_LIST } from 'graphql/mutations/lists';
import DoneIcon from 'assets/icons/done-mark.svg';
import ShowIcon from 'assets/icons/show.svg';
import HideIcon from 'assets/icons/hide.svg';

import useStyles from './styles';

const ShowsList = ({ boardId, list, index, refetch, canAddItems }) => {
  const classes = useStyles();

  const [addShowToList] = useMutation(ADD_SHOW_TO_LIST);
  const [createList] = useMutation(CREATE_LIST);

  const [showAddItem, setShowAddItem] = React.useState(false);
  const [showsOnList, setShowsOnList] = React.useState(list?.showsOnList || []);
  const [newListTitle, setNewListTitle] = React.useState('');
  const [hideItemsOnList, setHideItemsOnList] = React.useState(false);

  const handleAddItemToList = (item) => {
    addShowToList({
      variables: {
        listId: list.id,
        showId: item.showId,
      },
    }).then(() => {});
    setShowsOnList(showsOnList.concat(item));
  };

  const submitCreateList = () => {
    createList({
      variables: {
        listName: newListTitle,
        showsOnList: [],
        boardId: boardId,
      },
    }).then(() => {
      refetch();
    });
  };

  return (
    <div key={index} className={classes.list}>
      <div className={classes.listTitle}>
        {list?.newlyCreated && (
          <Input
            disableUnderline={true}
            value={newListTitle}
            onChange={(event) => setNewListTitle(event.target.value)}
            id="input-with-icon-adornment"
            placeholder="List name..."
            classes={{
              root: classes.inputRoot,
              focused: classes.inputRootFocused,
              input: classes.input,
              disabled: classes.disabledInput,
            }}
            endAdornment={
              <InputAdornment
                onClick={submitCreateList}
                className={classes.iconWrapper}
              >
                <img alt="" src={DoneIcon} />
              </InputAdornment>
            }
          />
        )}
        {!list?.newlyCreated && (
          <Typography className={classes.itemsListHeader}>
            {list.name}
          </Typography>
        )}
        {!list?.newlyCreated && (
          <img
            className={classes.visibilityBtn}
            onClick={() => setHideItemsOnList(!hideItemsOnList)}
            src={hideItemsOnList ? ShowIcon : HideIcon}
            alt=""
          />
        )}
      </div>
      {!list?.newlyCreated &&
        !hideItemsOnList &&
        showsOnList?.map((showOnList) => {
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
              {canAddItems && (
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
              )}
            </div>
          );
        })}
      {showAddItem && (
        <AddItemToListSearch addItemToList={handleAddItemToList} />
      )}
      {canAddItems && !hideItemsOnList && !list.newlyCreated && (
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
      )}
    </div>
  );
};

export default ShowsList;
