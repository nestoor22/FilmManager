import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ShowDetailsDialog from "../show-details-dialog/ShowDetailsDialog";
import useStyles from "./styles";

function ItemCard({ showInfo }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [showContent, setShowContent] = React.useState({});

  const openInfoDialog = (show) => {
    setOpen(true);
    setShowContent(show);
  };

  const onClose = () => {
    setOpen(false);
  };
  const title =
    showInfo.title.length < 22
      ? showInfo.title
      : showInfo.title.slice(0, 22) + "...";

  return (
    <Card
      onDoubleClick={(e) => {
        e.stopPropagation();
        openInfoDialog(showInfo);
      }}
      className={classes.root}
    >
      <div style={{ cursor: 'pointer' }}>
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
      </div>
      <CardActions className={classes.actionsContent}>
        <Button className={classes.button} size="small" color="primary">
          Add to list
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            openInfoDialog(showInfo);
          }}
          className={classes.button}
          size="small"
          color="primary"
        >
          More
        </Button>
      </CardActions>
      <ShowDetailsDialog show={showContent} open={open} onClose={onClose} />
    </Card>
  );
}

export default ItemCard;
