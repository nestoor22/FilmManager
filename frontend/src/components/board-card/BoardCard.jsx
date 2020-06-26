import React from 'react';

import Typography from '@material-ui/core/Typography';

import InfoIcon from 'assets/icons/info.svg';
import useStyles from './styles';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

const BoardCard = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.boardTile}
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
            Best Family shows by year
          </Typography>
          <img alt="" className={classes.infoIcon} src={InfoIcon} />
        </div>
        <div>
          <Chip
            label="Family"
            className={classes.customChip}
            variant="outlined"
          />
          <Chip
            label="Year sorted"
            className={classes.customChip}
            variant="outlined"
          />
          <Chip
            label="Marvel"
            className={classes.customChip}
            variant="outlined"
          />
          <Chip label="Old" className={classes.customChip} variant="outlined" />
        </div>
        <div className={classes.marksWrapper}>
          <Typography className={classes.markText}>Followers: 234</Typography>
          <Typography className={classes.markText}>
            Average rating: 8,7
          </Typography>
          <Typography className={classes.markText}>
            Rating place: 2134
          </Typography>
          <Typography className={classes.markText}>
            Movies/series on board: 89
          </Typography>
        </div>
        <div className={classes.cardFooter}>
          <Typography className={classes.markText}>Owners</Typography>
          <div className={classes.actionsBtns}>
            <Typography className={classes.actionBtnText}>Follow</Typography>
            <Typography className={classes.actionBtnText}>
              Ask to join
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
