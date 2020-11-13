import React from 'react';
import { useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import { PopoverWrapper } from 'components';
import ListMark from 'assets/icons/list-dot-mark.svg';

import useStyles from './styles';

const CollectionInfoSidebar = ({ collectionData, lists, setLists }) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const handleAddListToBoard = () => {
    if (!collectionData.isBoard) {
      return;
    }
    if (lists.find((list) => list.newlyCreated === true)) {
      return;
    }
    setLists(lists.concat({ newlyCreated: true }));
  };
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      enqueueSnackbar('Copied !', { variant: 'success' });
      setCopied(false);
    }
  }, [copied, enqueueSnackbar]);

  if (!collectionData) {
    return null;
  }

  return (
    <div className={classes.infoSidebar}>
      <div className={classes.headerWrapper}>
        <Typography className={classes.header}>
          {collectionData.name}
        </Typography>
        <PopoverWrapper text={'Copy share link'}>
          <div style={{ width: '20px' }}>
            <CopyToClipboard
              text={collectionData.name}
              onCopy={() => setCopied(true)}
            >
              <ShareIcon className={classes.shareIcon} />
            </CopyToClipboard>
          </div>
        </PopoverWrapper>
      </div>
      <Typography className={classes.description}>
        {collectionData.description}
      </Typography>
      <div className={classes.ownersBlockWrapper}>
        <Typography className={classes.subheader}>Managed by:</Typography>
        <div className={classes.avatarsWrapper}>
          {collectionData.members &&
            collectionData.members.map((member, index) => {
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
      {collectionData.isBoard && (
        <div className={classes.listsBlockWrapper}>
          <Typography className={classes.subheader}>Lists:</Typography>
          <div className={classes.listsNamesWrapper}>
            {collectionData.lists.map((item, index) => {
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
      )}
      {collectionData.canEdit && collectionData.isBoard && (
        <Button
          onClick={handleAddListToBoard}
          className={classes.addNewListBtn}
        >
          Add new list
        </Button>
      )}
    </div>
  );
};

export default CollectionInfoSidebar;
