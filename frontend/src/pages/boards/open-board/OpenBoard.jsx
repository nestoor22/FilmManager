import React from 'react';
import { useSnackbar } from 'notistack';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

import { BOARD } from 'graphql/queries/boards';
import { AppHeader, PopoverWrapper } from 'components';
import ListMark from 'assets/icons/list-dot-mark.svg';

import useStyles from './styles';
import ShowsList from '../../../components/shows-list/ShowsList';
import { Button } from '@material-ui/core';

const OpenBoard = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { data, refetch } = useQuery(BOARD, { variables: { boardId: id } });

  const [copied, setCopied] = React.useState(false);
  const [lists, setLists] = React.useState([]);

  document.body.style.backgroundColor =
    data?.board.backgroundColor || '#E9F0F2';

  React.useEffect(() => {
    if (copied) {
      enqueueSnackbar('Copied !', { variant: 'success' });
      setCopied(false);
    }
  }, [copied, enqueueSnackbar]);

  React.useEffect(() => {
    if (data?.board?.lists) {
      setLists(data?.board?.lists);
    }
  }, [data?.board?.lists]);

  const handleAddListToBoard = () => {
    if (lists.find((list) => list.newlyCreated === true)) {
      return;
    }
    setLists(lists.concat({ newlyCreated: true }));
  };

  return (
    <div className={classes.root}>
      <AppHeader />
      {data && (
        <div className={classes.contentWrapper}>
          <div className={classes.infoSidebar}>
            <div className={classes.headerWrapper}>
              <Typography className={classes.header}>
                {data?.board.name}
              </Typography>
              <PopoverWrapper text={'Copy share link'}>
                <div style={{ width: '20px' }}>
                  <CopyToClipboard
                    text={data?.board.name}
                    onCopy={() => setCopied(true)}
                  >
                    <ShareIcon className={classes.shareIcon} />
                  </CopyToClipboard>
                </div>
              </PopoverWrapper>
            </div>
            <Typography className={classes.description}>
              {data?.board.description}
            </Typography>
            <div className={classes.ownersBlockWrapper}>
              <Typography className={classes.subheader}>Managed by:</Typography>
              <div className={classes.avatarsWrapper}>
                {data?.board.members &&
                  data?.board.members.map((member, index) => {
                    return member.photo ? (
                      <Avatar
                        key={index}
                        className={classes.avatarImage}
                        src={member.photo}
                      />
                    ) : (
                      <Avatar key={index} className={classes.avatarImage}>
                        {member.firstName[0] + member.lastName[0]}
                      </Avatar>
                    );
                  })}
              </div>
            </div>
            <div className={classes.listsBlockWrapper}>
              <Typography className={classes.subheader}>Lists:</Typography>
              <div className={classes.listsNamesWrapper}>
                {data?.board.lists.map((item, index) => {
                  return (
                    <div className={classes.listName}>
                      <img alt="" src={ListMark} />
                      <Typography className={classes.listNameTitle}>
                        {item.name}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>
            {data.board.canEdit && (
              <Button
                onClick={handleAddListToBoard}
                className={classes.addNewListBtn}
              >
                Add new list
              </Button>
            )}
          </div>
          <div className={classes.listsContent}>
            {lists?.map((list, index) => {
              return (
                <ShowsList
                  boardId={data.board.id}
                  list={list}
                  index={index}
                  canAddItems={data.board.canEdit}
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
