import React from 'react';

import Avatar from '@material-ui/core/Avatar';

import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const AccountPreviewBlock = ({ userInfo }) => {
  const classes = useStyles();

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
            <Typography className={classes.textInput}>0</Typography>
          </div>
          <div className={classes.info}>
            <Typography className={classes.followersInfo}>
              Following:{' '}
            </Typography>
            <Typography className={classes.textInput}>0</Typography>
          </div>
        </div>
        <Button className={classes.followBtn}>Follow</Button>
      </div>
    </div>
  );
};

export default AccountPreviewBlock;
