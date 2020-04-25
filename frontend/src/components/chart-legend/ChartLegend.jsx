import React from "react";

import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ListItemText from "@material-ui/core/ListItemText";

import useStyles from "./styles";

const CustomChartLegend = ({
  legendData,
  legendTitle,
  titleDescription,
  legendColors,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.chartLegend}>
      {legendTitle && (
        <Typography className={classes.legendTitle}>{legendTitle}</Typography>
      )}
      {titleDescription && (
        <div className={classes.descriptionWrapper}>
          <Typography>{titleDescription}</Typography>
        </div>
      )}
      <List component="nav" className={classes.root} aria-label="contacts">
        {legendData.map((item) => {
          return (
            <ListItem className={classes.legendItem}>
              <ListItemIcon className={classes.listIcon}>
                <FiberManualRecordIcon
                  style={{
                    fill: legendColors[item.name],
                  }}
                />
              </ListItemIcon>
              <ListItemText className={classes.itemName}>
                <Typography style={{ color: "#fff" }}>
                  {item.legendTitle}
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography
                  style={{ color: "#fff" }}
                >{`${item.value}%`}</Typography>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default CustomChartLegend;
