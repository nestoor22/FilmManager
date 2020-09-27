import React from 'react';

import Card from '@material-ui/core/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RatingMark from 'assets/icons/rating-mark.svg';

import { ShowDetailsDialog, AddItemToListModal } from 'components';

import useStyles from './styles';

function ItemCard({ showInfo }) {
  const classes = useStyles();

  const [showContent, setShowContent] = React.useState({});
  const [selectedShowId, setSelectedShowId] = React.useState('');
  const [openShowInfoDialog, setShowInfoDialog] = React.useState(false);
  const [openAddToListDialog, setOpenAddToListDialog] = React.useState(false);

  const openInfoDialog = (show) => {
    setShowInfoDialog(true);
    setShowContent(show);
  };

  const onCloseInfoDialog = () => {
    setShowInfoDialog(false);
  };

  const onCloseAddToListDialog = () => {
    setOpenAddToListDialog(false);
  };

  const onOpenAddToListDialog = (show) => {
    setSelectedShowId(show.showId);
    setOpenAddToListDialog(true);
  };

  const title =
    showInfo.title.length < 22
      ? showInfo.title
      : showInfo.title.slice(0, 22) + '...';

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
          height="300"
          width="220"
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
          <Button
            className={classes.button}
            onClick={() => onOpenAddToListDialog(showInfo)}
            size="small"
          >
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
              fontWeight: 'bold',
            }}
          >
            {showInfo.imdbRating}
          </Typography>
        </div>
      </div>
      <ShowDetailsDialog
        show={showContent}
        open={openShowInfoDialog}
        onClose={onCloseInfoDialog}
      />
      {openAddToListDialog && (
        <AddItemToListModal
          showId={selectedShowId}
          open={openAddToListDialog}
          onClose={onCloseAddToListDialog}
        />
      )}
    </Card>
  );
}

export default ItemCard;
