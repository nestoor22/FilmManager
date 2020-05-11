import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import { ShowDetailsDialog } from 'components';

import useStyles from './styles';

function ItemCard({ showInfo }) {
  const classes = useStyles();

  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [showContent, setShowContent] = React.useState({});
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const openInfoDialog = (show) => {
    setOpenDialog(true);
    setShowContent(show);
  };

  const onClose = () => {
    setOpenDialog(false);
  };

  const title =
    showInfo.title.length < 22
      ? showInfo.title
      : showInfo.title.slice(0, 22) + '...';

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
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          size="small"
          color="primary"
          onClick={handleToggle}
          className={classes.button}
        >
          More
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      classes={{ root: classes.menuItem }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openInfoDialog(showInfo);
                      }}
                    >
                      Info
                    </MenuItem>
                    <MenuItem
                      classes={{ root: classes.menuItem }}
                      onClick={(e) => {
                        handleClose(e);
                        history.push('/account');
                      }}
                    >
                      Add rate
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </CardActions>
      <ShowDetailsDialog
        show={showContent}
        open={openDialog}
        onClose={onClose}
      />
    </Card>
  );
}

export default ItemCard;
