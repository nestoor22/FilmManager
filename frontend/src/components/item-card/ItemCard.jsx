import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 175,
        maxHeight: 320,
        margin: 20
    },
});

function ItemCard({showInfo}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Poster"
                    height="250"
                    width="175"
                    image={showInfo.posterUrl}
                    title="Poster"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {showInfo.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {showInfo.releaseDate}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add to card
                </Button>
                <Button size="small" color="primary">
                    More
                </Button>
            </CardActions>
        </Card>
    );
}

export default ItemCard;