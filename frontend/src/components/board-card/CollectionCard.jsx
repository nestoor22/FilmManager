import React from 'react';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import { PopoverWrapper } from 'components';
import InfoIcon from 'assets/icons/info.svg';
import { FOLLOW_BOARD } from 'graphql/mutations/boards';

import useStyles from './styles';

const CollectionCard = ({ refetch, collectionInfo }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [followBoard] = useMutation(FOLLOW_BOARD);

  const [changeFollowedStatus, setChangeFollowedStatus] = React.useState(false);

  React.useState(() => {}, [changeFollowedStatus]);

  return (
    <div
      className={classes.boardTile}
      onDoubleClick={() => {
        if (!collectionInfo.isOpen && !collectionInfo.isFollowed) {
          return;
        }
        if (collectionInfo.isBoard) {
          history.push(`/boards/${collectionInfo.id}/view`);
        } else {
          history.push(`/lists/${collectionInfo.id}/view`);
        }
      }}
    >
      <div className={classes.boardTileContent}>
        <div className={classes.showsInCollectionWrapper}>
          {collectionInfo?.shows.map((showInfo) => {
            return (
              <img
                className={classes.miniPoster}
                src={showInfo.posterUrl}
                alt={showInfo.title}
                title={showInfo.title}
              />
            );
          })}
        </div>
        <div className={classes.boardHeaderWrapper}>
          <Typography className={classes.boardName}>
            {collectionInfo.name}
          </Typography>
          <div className={classes.infoIcon}>
            <PopoverWrapper
              text={collectionInfo.description}
              children={<img alt="" src={InfoIcon} />}
            />
          </div>
        </div>
        <div>
          {collectionInfo.tags.map((tag, index) => {
            return (
              <Chip
                key={index}
                label={tag}
                className={classes.customChip}
                variant="outlined"
              />
            );
          })}
        </div>
        <div className={classes.marksWrapper}>
          <Typography className={classes.markText}>
            Followers: {collectionInfo.followers}
          </Typography>
          <Typography className={classes.markText}>
            Average show rating: {collectionInfo.averageShowRating}
          </Typography>
          <Typography className={classes.markText}>
            Rating place: 2134
          </Typography>
          <Typography className={classes.markText}>
            Items on board: {collectionInfo.showsNumber}
          </Typography>
        </div>
        <div className={classes.cardFooter}>
          {!collectionInfo.isOwner && (
            <div className={classes.actionsBtns}>
              <Button
                onClick={(e) => {
                  followBoard({
                    variables: {
                      boardId: collectionInfo.id,
                      unfollow: collectionInfo.isFollowed,
                    },
                  }).then(() => {
                    enqueueSnackbar(
                      collectionInfo.isFollowed ? 'Unfollow !' : 'Followed!',
                      {
                        variant: 'success',
                      }
                    );
                    if (collectionInfo.isFollowed) {
                      refetch();
                    }
                    collectionInfo.isFollowed = !collectionInfo.isFollowed;
                    setChangeFollowedStatus(!changeFollowedStatus);
                  });
                }}
                disabled={!collectionInfo.isOpen}
                classes={{
                  root: classes.actionBtnText,
                  disabled: classes.disabled,
                }}
              >
                {collectionInfo.isFollowed ? 'Unfollow' : 'Follow'}
              </Button>
              <Button
                disabled={collectionInfo.isOpen}
                classes={{
                  root: classes.actionBtnText,
                  disabled: classes.disabled,
                }}
              >
                Ask to join
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
