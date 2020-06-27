import React from 'react';

import Typography from '@material-ui/core/Typography';

import InfoIcon from 'assets/icons/info.svg';
import Chip from '@material-ui/core/Chip';

import { PopoverWrapper } from 'components';
import useStyles from './styles';

const BoardCard = ({ boardInfo }) => {
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
            Movies/series on board: {boardInfo.showsNumber}
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
