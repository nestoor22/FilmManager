import React from 'react';

import { useMutation } from '@apollo/react-hooks';

import { Button, Typography } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Avatar from '@material-ui/core/Avatar';

import { FOLLOW_USER, UNFOLLOW_USER } from 'graphql/mutations/user';

import useStyles from './styles';

const AccountPreviewBlock = ({ userInfo }) => {
  const classes = useStyles();

  const [followUser] = useMutation(FOLLOW_USER);
  const [unfollowUser] = useMutation(UNFOLLOW_USER);

  const handleUnfollow = () => {
    userInfo.followers = userInfo.followers - 1;
    userInfo.isFollowedByCurrentUser = false;

    unfollowUser({
      variables: {
        followedUserId: userInfo.id,
      },
    }).then(() => {});
  };

  const handleFollow = () => {
    userInfo.followers = userInfo.followers + 1;
    userInfo.isFollowedByCurrentUser = true;
    followUser({
      variables: {
        followedUserId: userInfo.id,
      },
    }).then(() => {});
  };

  React.useEffect(() => {}, [userInfo.followers]);
  return (
    <div className={classes.root}>
      {userInfo.photo && (
        <Avatar className={classes.avatarImage} src={userInfo.photo} />
      )}
      {!userInfo.photo && (
        <Avatar className={classes.avatarImage}>
          {userInfo.firstName[0] + userInfo.lastName[0]}
        </Avatar>
      )}
      <div className={classes.generalInfo}>
        <Typography className={classes.userName}>
          {userInfo.firstName} {userInfo.lastName}
        </Typography>
        <div style={{ marginBottom: 25 }} className={classes.infoRow}>
          <div className={classes.info}>
            <EmailRoundedIcon className={classes.accountTabIcon} />
            <Typography className={classes.textInput}>
              {userInfo.email}
            </Typography>
          </div>
          <div className={classes.info}>
            <HomeRoundedIcon className={classes.accountTabIcon} />
            <Typography className={classes.textInput}>
              {userInfo.country ? `${userInfo.country}, ` : ''}{' '}
              {userInfo.city ? userInfo.city : ''}
            </Typography>
          </div>
        </div>
        <div className={classes.infoRow}>
          <div className={classes.info}>
            <Typography className={classes.followersInfo}>
              Followers:{' '}
            </Typography>
            <Typography className={classes.followersInfo}>
              {userInfo.followers}
            </Typography>
          </div>
          <div className={classes.info}>
            <Typography className={classes.followersInfo}>
              Following:{' '}
            </Typography>
            <Typography className={classes.followersInfo}>
              {userInfo.followed}
            </Typography>
          </div>
        </div>
        <Button
          onClick={
            userInfo.isFollowedByCurrentUser ? handleUnfollow : handleFollow
          }
          className={classes.followBtn}
        >
          {userInfo.isFollowedByCurrentUser ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
    </div>
  );
};

export default AccountPreviewBlock;
