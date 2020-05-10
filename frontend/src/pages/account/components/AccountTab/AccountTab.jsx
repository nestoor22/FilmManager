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

import { ShowPanel } from 'components';
import { USER } from 'graphql/queries/user';

import useStyles from './styles';

const AccountTab = () => {
  const classes = useStyles();

  const { data } = useQuery(USER);

  return (
    <div className={classes.accountTab}>
      {data && data.user && (
        <div className={classes.generalInfo}>
          <div className={classes.avatarWrapper}>
            {data.user.photo && (
              <Avatar className={classes.avatarImage} src={data.user.photo} />
            )}
            {!data.user.photo && (
              <Avatar className={classes.avatarImage}>
                {data.user.firstName[0] + data.user.lastName[0]}
              </Avatar>
            )}
            <Typography className={classes.nameInput}>
              {data.user.firstName} {data.user.lastName}
            </Typography>
          </div>
          <div className={classes.textInfo}>
            <div className={classes.infoRow}>
              <div className={classes.info}>
                <EmailRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {data.user.email}
                </Typography>
              </div>
              <div className={classes.info}>
                <HomeRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {data.user.country ? `${data.user.country}, ` : ''}{' '}
                  {data.user.city ? data.user.city : ''}
                </Typography>
              </div>
            </div>
            <div className={classes.infoRow}>
              <div className={classes.info}>
                <CakeRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {data.user.birthday
                    ? moment(data.user.birthday).format('YYYY-MM-DD')
                    : ''}
                </Typography>
              </div>
              <div className={classes.info}>
                <FavoriteRoundedIcon className={classes.accountTabIcon} />
                <Typography className={classes.textInput}>
                  {data.user.favoriteShow ? data.user.favoriteShow : ''}
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
                Given ratings
              </Typography>
              <ShowPanel />
              <ShowPanel />
              <ShowPanel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountTab;
