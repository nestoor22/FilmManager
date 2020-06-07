import React from 'react';

import Card from '@material-ui/core/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RatingMark from 'assets/icons/rating-mark.svg';

import { ShowDetailsDialog } from 'components';

import useStyles from './styles';

function ItemCard({ showInfo }) {
  const classes = useStyles();

  const [showContent, setShowContent] = React.useState({});

  const [openDialog, setOpenDialog] = React.useState(false);

  const openInfoDialog = (show) => {
    setOpenDialog(true);
    setShowContent(show);
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  const title =
    showInfo.title.length < 18
      ? showInfo.title
      : showInfo.title.slice(0, 18) + '...';

  const genres = showInfo.genres.map((item) => {
    return item.genreName.toLowerCase();
  });

  return (
    <Card
      onDoubleClick={(e) => {
        e.stopPropagation();
        openInfoDialog(showInfo);
      }}
      className={classes.root}
    >
      <div style={{ cursor: 'pointer', position: 'relative' }}>
        <CardMedia
          component="img"
          alt="Poster"
          height="265"
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
          <Typography className={classes.subtitle}>
            {showInfo.releaseDate} {genres.slice(0, 2).join(', ')}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionsContent}>
          <Button className={classes.button} size="small">
            <AddCircleOutlineIcon
              style={{ marginRight: '5px', fontSize: '15px' }}
              fill={'#BAC7CB'}
            />
            add to list
          </Button>
        </CardActions>
        <div style={{ position: 'absolute', right: 0, top: 0 }}>
          <img
            src={RatingMark}
            style={{ position: 'absolute', right: 0, top: 0 }}
            alt={''}
          />
          <Typography
            style={{
              position: 'absolute',
              right: 5,
              top: 10,
              fontSize: '18px',
              color: '#BAC7CB',
              fontWeight: 'bold'
            }}
          >
            {showInfo.usersRating}
          </Typography>
        </div>
      </div>
      <ShowDetailsDialog
        show={showContent}
        open={openDialog}
        onClose={onCloseDialog}
      />
    </Card>
  );
}

export default ItemCard;
