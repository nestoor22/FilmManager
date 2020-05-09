import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Chip from '@material-ui/core/Chip';

import useStyles from './styles';

function GeneralShowInfo({ show }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListSubheader className={classes.subheader}>Title</ListSubheader>
        <ListItem className={classes.title}>{show.title}</ListItem>
        <ListSubheader className={classes.subheader}>
          Release year
        </ListSubheader>
        <ListItem className={classes.description}>{show.releaseDate}</ListItem>
        <ListSubheader className={classes.subheader}>Plot</ListSubheader>
        <ListItem className={classes.description}>{show.plot}</ListItem>
        <ListSubheader className={classes.subheader}>Genres</ListSubheader>
        <div className={classes.tabsRoot}>
          {show.genres &&
            show.genres.map((element, index) => {
              return (
                <Chip
                  key={index}
                  label={element.genreName}
                  className={classes.customChip}
                  variant="outlined"
                />
              );
            })}
        </div>
      </List>
    </div>
  );
}

export default GeneralShowInfo;
