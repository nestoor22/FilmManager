import React from 'react';

import { useSnackbar } from 'notistack';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { BOARD } from 'graphql/queries/boards';
import { AppHeader, CreateListPopup, PopoverWrapper } from 'components';

import useStyles from './styles';
import classNames from 'classnames';
import CardMedia from '@material-ui/core/CardMedia';

const OpenBoard = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { data, refetch } = useQuery(BOARD, { variables: { boardId: id } });

  const onCloseHandler = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (data) {
      document.body.style.backgroundColor = data.board.backgroundColor;
    }
  }, [data]);

  React.useEffect(() => {
    if (copied) {
      enqueueSnackbar('Copied !', { variant: 'success' });
      setCopied(false);
    }
  }, [copied, enqueueSnackbar]);

  return (
    <div className={classes.root}>
      <AppHeader />
      {data && data.board && (
        <div className={classes.subHeader}>
          <Typography className={classes.boardName}>
            {data.board.name}
          </Typography>
          <PopoverWrapper text={'Copy share link'}>
            <CopyToClipboard
              text={data.board.name}
              onCopy={() => setCopied(true)}
            >
              <ShareIcon />
            </CopyToClipboard>
          </PopoverWrapper>
        </div>
      )}
      <div className={classes.lists}>
        {data &&
          data.board.lists &&
          data.board.lists.map((list, index) => {
            return (
              <div key={index} className={classes.list}>
                <div className={classes.listTitleWrapper}>
                  <Typography className={classes.listTitle}>
                    {list.name}
                  </Typography>
                </div>
                <div className={classes.listItemsWrapper}>
                  {list.showsOnList.map((showOnList) => {
                    return (
                      <div className={classNames(classes.showRow)}>
                        <CardMedia
                          className={classes.poster}
                          component="img"
                          alt="Poster"
                          height="30"
                          width="20"
                          image={showOnList.show.posterUrl}
                          title="Poster"
                        />
                        <div>
                          <Typography className={classes.showTitle}>
                            {showOnList.show.title}
                          </Typography>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        <Button onClick={setOpen} classes={{ root: classes.createNewButton }}>
          <div className={classes.addNewCard}>
            <AddCircleOutlineIcon className={classes.addNewIcon} />
            <Typography className={classes.createNewButtonText}>
              Create new
            </Typography>
          </div>
        </Button>
        <CreateListPopup
          open={open}
          onClose={onCloseHandler}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default OpenBoard;
