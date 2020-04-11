import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 185,
    maxHeight: 330,
    margin: 20,
  },
  title: {
    margin: 0,
    fontSize: "15px",
  },
  content: {
    padding: 0,
  },
  actionsContent: {
    padding: 0,
  },
});

function ItemCard({ showInfo }) {
  const classes = useStyles();
  const title =
    showInfo.title.length < 22
      ? showInfo.title
      : showInfo.title.slice(0, 22) + "...";
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Poster"
          height="250"
          width="185"
          image={showInfo.posterUrl}
          title="Poster"
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h6"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {showInfo.releaseDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionsContent}>
        <Button size="small" color="primary">
          Add to list
        </Button>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
