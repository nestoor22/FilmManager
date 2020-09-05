import React from 'react';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import { PopoverWrapper } from 'components';
import InfoIcon from 'assets/icons/info.svg';
import { FOLLOW_BOARD } from 'graphql/mutations/boards';

import useStyles from './styles';

const BoardCard = ({ refetch, boardInfo }) => {
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
        history.push(`/boards/${boardInfo.id}/view`);
      }}
      style={{
        backgroundImage: `url('${require('./milky-way-2695569_960_720.jpg')}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={classes.boardTileContent}>
        <div className={classes.boardHeaderWrapper}>
          <Typography className={classes.boardName}>
            {boardInfo.name}
          </Typography>
          <div className={classes.infoIcon}>
            <PopoverWrapper
              text={boardInfo.description}
              children={<img alt="" src={InfoIcon} />}
            />
          </div>
        </div>
        <div>
          {boardInfo.tags.map((tag, index) => {
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
            Followers: {boardInfo.followers}
          </Typography>
          <Typography className={classes.markText}>
            Average show rating: {boardInfo.averageShowRating}
          </Typography>
          <Typography className={classes.markText}>
            Rating place: 2134
          </Typography>
          <Typography className={classes.markText}>
            Items on board: {boardInfo.showsNumber}
          </Typography>
        </div>
        <div className={classes.cardFooter}>
          <Typography
            style={{ marginRight: 0, width: '100px' }}
            className={classes.markText}
          >
            Owners:
          </Typography>
          {boardInfo.members &&
            boardInfo.members.length < 8 &&
            boardInfo.members.map((member, index) => {
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
          {boardInfo.members &&
            boardInfo.members.length >= 8 &&
            boardInfo.members.slice(0, 8).map((member) => {
              return member.photo ? (
                <Avatar className={classes.avatarImage} src={member.photo} />
              ) : (
                <Avatar className={classes.avatarImage}>
                  {member.firstName[0] + member.lastName[0]}
                </Avatar>
              );
            })}
          {boardInfo.members && boardInfo.members.length >= 8 && (
            <div className={classes.numberIcon}>
              <Typography>...</Typography>
              <Avatar
                style={{ marginLeft: '5px' }}
                className={classes.avatarImage}
              >
                +{boardInfo.members.length - 8}
              </Avatar>
            </div>
          )}
          <div className={classes.actionsBtns}>
            <Button
              onClick={(e) => {
                followBoard({
                  variables: {
                    boardId: boardInfo.id,
                    unfollow: boardInfo.isFollowed,
                  },
                }).then(() => {
                  enqueueSnackbar(
                    boardInfo.isFollowed ? 'Unfollow !' : 'Followed!',
                    {
                      variant: 'success',
                    }
                  );
                  if (boardInfo.isFollowed) {
                    refetch();
                  }
                  boardInfo.isFollowed = !boardInfo.isFollowed;
                  setChangeFollowedStatus(!changeFollowedStatus);
                });
              }}
              disabled={!boardInfo.isOpen}
              classes={{
                root: classes.actionBtnText,
                disabled: classes.disabled,
              }}
            >
              {boardInfo.isFollowed ? 'Unfollow' : 'Follow'}
            </Button>
            <Button
              disabled={boardInfo.isOpen}
              classes={{
                root: classes.actionBtnText,
                disabled: classes.disabled,
              }}
            >
              Ask to join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
