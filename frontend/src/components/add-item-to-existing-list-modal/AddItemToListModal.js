import React from 'react';

import { useSnackbar } from 'notistack';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DialogTitle from '@material-ui/core/DialogTitle';
import Accordion from '@material-ui/core/Accordion';
import { Typography } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import { Loader } from 'components';

import { COLLECTIONS } from 'graphql/queries/collections';
import { ADD_SHOW_TO_LIST } from 'graphql/mutations/lists';

import useStyles from './styles';

const AddItemToListModal = ({ open, showId, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { data, loading } = useQuery(COLLECTIONS, {
    fetchPolicy: 'no-cache',
    variables: {
      userBoards: true,
    },
  });

  const [addShowToList] = useMutation(ADD_SHOW_TO_LIST);

  const handleAddItem = (listId) => {
    addShowToList({
      variables: {
        listId: listId,
        showId: showId,
      },
    }).then(() => {
      onClose();
      enqueueSnackbar('Successfully added', { variant: 'success' });
    });
  };
  return (
    <Dialog open={open} classes={{ paper: classes.paper }}>
      <IconButton className={classes.closeBtn} onClick={onClose}>
        <HighlightOffIcon className={classes.closeIcon} />
      </IconButton>
      <DialogTitle className={classes.title}>Select list</DialogTitle>
      <div>
        {loading && <Loader />}
        {!loading &&
          data?.boards.map((board) => {
            if (board.lists.length !== 0) {
              return (
                <Accordion id={board.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ fill: '#073947' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{
                      root: classes.summaryRoot,
                      content: classes.summaryContent,
                    }}
                  >
                    <Typography className={classes.boardName}>
                      {board.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails classes={{ root: classes.detailsRoot }}>
                    <List classes={{ root: classes.listRoot }}>
                      {board.lists.map((list) => (
                        <ListItem
                          onClick={() => handleAddItem(list.id)}
                          className={classes.listName}
                        >
                          {list.name}
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              );
            } else {
              return;
            }
          })}
      </div>
    </Dialog>
  );
};

export default AddItemToListModal;
