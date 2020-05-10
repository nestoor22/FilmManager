import React from 'react';

import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

import { ShowPanel } from 'components';

import useStyles from './styles';

const AccountTab = () => {
  const classes = useStyles();

  return (
    <div className={classes.accountTab}>
      <div className={classes.generalInfo}>
        <div className={classes.avatarWrapper}>
          <Avatar className={classes.avatarImage}>YN</Avatar>
          <Typography className={classes.nameInput}>Yaroslav Nestor</Typography>
        </div>
        <div className={classes.textInfo}>
          <div className={classes.infoRow}>
            <div className={classes.info}>
              <EmailRoundedIcon className={classes.accountTabIcon} />
              <Typography className={classes.textInput}>
                yaroslav.nestor@gmail.com
              </Typography>
            </div>
            <div className={classes.info}>
              <HomeRoundedIcon className={classes.accountTabIcon} />
              <Typography className={classes.textInput}>
                Ukraine, L'viv
              </Typography>
            </div>
          </div>
          <div className={classes.infoRow}>
            <div className={classes.info}>
              <CakeRoundedIcon className={classes.accountTabIcon} />
              <Typography className={classes.textInput}>2020-02-02</Typography>
            </div>
            <div className={classes.info}>
              <FavoriteRoundedIcon className={classes.accountTabIcon} />
              <Typography className={classes.textInput}>Green Mile</Typography>
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
    </div>
  );
};

export default AccountTab;
