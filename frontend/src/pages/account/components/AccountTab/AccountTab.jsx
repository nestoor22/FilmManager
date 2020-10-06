import React from 'react';

import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';

import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

import { ShowPanel, Loader } from 'components';

import useStyles from './styles';
import BoardsMembershipCarousel from './BoardsMembershipCarousel';

const AccountTab = ({ userInfo, loading, refetch }) => {
  const classes = useStyles();

  if (loading) {
    return <Loader isLoading={true} />;
  }
  return (
    <div className={classes.accountTab}>
      {userInfo && userInfo.user && userInfo.showsRatings && (
        <div className={classes.generalInfo}>
          <div className={classes.avatarWrapper}>
            {userInfo.user.photo && (
              <Avatar
                className={classes.avatarImage}
                src={userInfo.user.photo}
              />
            )}
            {!userInfo.user.photo && (
              <Avatar className={classes.avatarImage}>
                {userInfo.user.firstName[0] + userInfo.user.lastName[0]}
              </Avatar>
            )}
            <Typography className={classes.nameInput}>
              {userInfo.user.firstName} {userInfo.user.lastName}
            </Typography>
          </div>
          <div className={classes.textInfo}>
            <div className={classes.infoRow}>
              <div className={classes.info}>
                <EmailRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {userInfo.user.email}
                </Typography>
              </div>
              <div className={classes.info}>
                <HomeRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {userInfo.user.country ? `${userInfo.user.country}, ` : ''}{' '}
                  {userInfo.user.city ? userInfo.user.city : ''}
                </Typography>
              </div>
            </div>
            <div className={classes.infoRow}>
              <div className={classes.info}>
                <CakeRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {userInfo.user.birthday
                    ? moment(userInfo.user.birthday).format('YYYY-MM-DD')
                    : ''}
                </Typography>
              </div>
              <div className={classes.info}>
                <FavoriteRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {userInfo.user.favoriteShow ? userInfo.user.favoriteShow : ''}
                </Typography>
              </div>
            </div>
            <div className={classes.preferencesInfo}>
              <Typography className={classes.blockTitle}>
                Genres preferences
              </Typography>
              <div className={classes.infoRow}>
                <Chip
                  label={'Action'}
                  className={classes.customChip}
                  variant="outlined"
                />
              </div>
            </div>
            <div className={classes.ratingsInfo}>
              <Typography className={classes.blockTitle}>
                Boards membership
              </Typography>
              <BoardsMembershipCarousel refetch={refetch} boards={userInfo.boards} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountTab;
