import React from 'react';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import { EditIcon, DeleteIcon } from 'components';

import useStyles from './styles';

const ShowPanel = ({ className, showsInfo }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, className)}>
      {showsInfo &&
        showsInfo.map((showInfo) => {
          return (
            <div style={{ display: 'flex' }}>
              <div className={classNames(classes.showRow)}>
                <CardMedia
                  className={classes.poster}
                  component="img"
                  alt="Poster"
                  height="80"
                  width="60"
                  image={showInfo.show.posterUrl}
                  title="Poster"
                />
                <div>
                  <Typography className={classes.showTitle}>
                    {showInfo.show.title}
                  </Typography>
                  <Typography className={classes.releaseYear}>
                    {showInfo.show.releaseDate}
                  </Typography>
                </div>
                <Typography className={classes.showRating}>
                  {showInfo.rating}
                </Typography>
              </div>
              <div className={classes.actionsIcons}>
                <div className={classes.iconWrapper}>
                  <EditIcon />
                </div>
                <div className={classes.iconWrapper}>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShowPanel;
