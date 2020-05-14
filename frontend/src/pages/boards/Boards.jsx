import React from 'react';

import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { AppHeader, CreateBoardPopUp } from 'components';

import { BOARDS } from 'graphql/queries/boards';
import { SET_LAST_VISITED_BOARD } from 'graphql/mutations/boards';

import useStyles from './styles';

const Boards = () => {
  const classes = useStyles();
  document.body.style.backgroundColor = '#254052';

  const history = useHistory();
  const [openCreationPopup, setOpenCreationPopup] = React.useState(false);
  const [isTeamBoard, setIsTeamBoard] = React.useState(false);
  const [setLastVisitedBoard] = useMutation(SET_LAST_VISITED_BOARD);

  const { data, refetch } = useQuery(BOARDS);

  const handleClosePopup = () => {
    setOpenCreationPopup(false);
  };

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.content}>
        <div className={classes.boardsCardsWrapper}>
          <Typography className={classes.boardsBlockTitle}>
            Latest visited boards
          </Typography>
          <div className={classes.boardsRow}>
            {data &&
              data.lastVisitedBoards.length !== 0 &&
              data.lastVisitedBoards.map((board, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: board.backgroundColor }}
                    className={classes.boardCard}
                    onClick={() => {
                      setLastVisitedBoard({
                        variables: { lastVisitedBoardId: board.id },
                      }).then(() => {});
                      history.push(`/boards/${board.id}`);
                    }}
                  >
                    <Typography className={classes.boardTitle}>
                      {board.name}
                    </Typography>
                  </div>
                );
              })}
            {data && data.lastVisitedBoards.length === 0 && (
              <Typography className={classes.boardsBlockTitle}>
                You have not visited boards in current session
              </Typography>
            )}
          </div>
          <Typography className={classes.boardsBlockTitle}>
            Personal boards
          </Typography>
          <div className={classes.boardsRow}>
            {data &&
              data.boards &&
              data.boards.map((board, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: board.backgroundColor }}
                    className={classes.boardCard}
                    onClick={() => {
                      setLastVisitedBoard({
                        variables: { lastVisitedBoardId: board.id },
                      }).then(() => {});
                      history.push(`/boards/${board.id}`);
                    }}
                  >
                    <Typography className={classes.boardTitle}>
                      {board.name}
                    </Typography>
                  </div>
                );
              })}
            <Button
              classes={{ root: classes.createNewButton }}
              onClick={() => {
                setOpenCreationPopup(true);
                setIsTeamBoard(false);
              }}
            >
              <div className={classes.addNewCard}>
                <AddCircleOutlineIcon
                  style={{ fontSize: 50, fill: '#fff' }}
                ></AddCircleOutlineIcon>
                <Typography className={classes.createNewButtonText}>
                  Create new
                </Typography>
              </div>
            </Button>
          </div>
          <Typography className={classes.boardsBlockTitle}>
            Teams boards
          </Typography>
          <div className={classes.boardsRow}>
            <Button
              classes={{ root: classes.createNewButton }}
              onClick={() => {
                setOpenCreationPopup(true);
                setIsTeamBoard(true);
              }}
            >
              <div className={classes.addNewCard}>
                <AddCircleOutlineIcon
                  style={{ fontSize: 50, fill: '#fff' }}
                ></AddCircleOutlineIcon>
                <Typography className={classes.createNewButtonText}>
                  Create new
                </Typography>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <CreateBoardPopUp
        open={openCreationPopup}
        onClose={handleClosePopup}
        isTeamBoard={isTeamBoard}
        refetch={refetch}
      />
    </div>
  );
};

export default Boards;
