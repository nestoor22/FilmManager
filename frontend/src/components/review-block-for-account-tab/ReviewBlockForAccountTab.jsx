import React from 'react';

import useStyles from './styles';
import { Typography } from '@material-ui/core';

const ReviewBlockForAccountTab = ({ reviewInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.showInfo}>
        <img alt="" src={reviewInfo.show.posterUrl} height={200} width={140} />
        <Typography style={{ fontSize: '15px' }}>
          {reviewInfo.show.title}, {reviewInfo.show.releaseDate}
        </Typography>
      </div>
      <div
        className={classes.reviewContent}
        dangerouslySetInnerHTML={{ __html: reviewInfo.content }}
      />
    </div>
  );
};

export default ReviewBlockForAccountTab;
