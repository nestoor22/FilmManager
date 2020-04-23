import React from "react";

import useStyles from "./styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

function GeneralShowInfo({ show }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListSubheader>Title</ListSubheader>
        <ListItem>{show.title}</ListItem>
        <ListSubheader>Release year</ListSubheader>
        <ListItem>{show.releaseDate}</ListItem>
        <ListSubheader>Plot</ListSubheader>
        <ListItem>{show.plot}</ListItem>
      </List>
    </div>
  );
}

export default GeneralShowInfo;
