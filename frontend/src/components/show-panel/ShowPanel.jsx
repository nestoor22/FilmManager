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
      <div className={classNames(classes.showRow)}>
        <CardMedia
          className={classes.poster}
          component="img"
          alt="Poster"
          height="80"
          width="60"
          image={
            'http://ex-fs.net/uploads/posts/2020-05/1589097188_legionnaires-trail.jpg'
          }
          title="Poster"
        />
        <div>
          <Typography className={classes.showTitle}>Legion</Typography>
          <Typography className={classes.releaseYear}>2020</Typography>
        </div>
        <Typography className={classes.showRating}>9.2</Typography>
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
};

export default ShowPanel;
