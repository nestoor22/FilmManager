import React from 'react';

import classNames from 'classnames';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';

import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';

import { EditIcon, DeleteIcon } from 'components';
import ConfirmContext from 'contexts/ConfirmContext';
import { DELETE_RATING } from 'graphql/mutations/user';

import useStyles from './styles';

const ShowPanel = ({ className, showsInfo, refetch }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const confirm = React.useContext(ConfirmContext);
  const [deleteShowRateId] = useMutation(DELETE_RATING);

  const onDeleteRateHandler = (showRateId) => {
    confirm({
      title: 'Are you sure you want to remove your rate?',
      confirmationText: 'Remove',
      cancellationText: 'Back',
    })
      .then(() => {
        deleteShowRateId({
          variables: {
            showRateId: showRateId,
          },
        }).then(() => {
          enqueueSnackbar('Your rate was successfully removed', {
            variant: 'success',
          });
          refetch();
        });
      })
      .catch(() => {});
  };

  return (
    <div className={classNames(classes.root, className)}>
      {showsInfo &&
        showsInfo.map((showInfo, index) => {
          return (
            <div key={index} style={{ display: 'flex' }}>
              <div className={classNames(classes.showRow)}>
                <CardMedia
                  className={classes.poster}
                  component="img"
                  alt="Poster"
                  height="80"
                  width="60"
                  image={showInfo.show.posterUrl}
                  title="Poster"
                />
                <div>
                  <Typography className={classes.showTitle}>
                    {showInfo.show.title}
                  </Typography>
                  <Typography className={classes.releaseYear}>
                    {showInfo.show.releaseDate}
                  </Typography>
                </div>
                <Typography className={classes.showRating}>
                  {showInfo.rating}
                </Typography>
              </div>
              <div className={classes.actionsIcons}>
                <IconButton
                  className={classes.iconWrapper}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteRateHandler(showInfo.show.showId);
                  }}
                  className={classes.iconWrapper}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShowPanel;
