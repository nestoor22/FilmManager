import React from 'react';
import classNames from 'classnames';
import { useSnackbar } from 'notistack';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { BOARD } from 'graphql/queries/boards';
import { AppHeader, CreateListPopup, PopoverWrapper } from 'components';

import useStyles from './styles';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';

const OpenBoard = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { data, refetch } = useQuery(BOARD, { variables: { boardId: id } });
  const anchorRef = React.useRef(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const prevOpen = React.useRef(open);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const onCloseHandler = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (data) {
      document.body.style.backgroundColor = data.board.backgroundColor;
    }
  }, [data]);

  React.useEffect(() => {
    if (copied) {
      enqueueSnackbar('Copied !', { variant: 'success' });
      setCopied(false);
    }
  }, [copied, enqueueSnackbar]);

  return (
    <div className={classes.root}>
      <AppHeader />
      {data && data.board && (
        <div className={classes.subHeader}>
          <Typography className={classes.boardName}>
            {data.board.name}
          </Typography>
          <PopoverWrapper text={'Copy share link'}>
            <CopyToClipboard
              text={data.board.name}
              onCopy={() => setCopied(true)}
            >
              <ShareIcon />
            </CopyToClipboard>
          </PopoverWrapper>
          <div className={classes.membersAvatarsList}>
            {data.board.members &&
              data.board.members.length < 8 &&
              data.board.members.map((member) => {
                return member.photo ? (
                  <Avatar className={classes.avatarImage} src={member.photo} />
                ) : (
                  <Avatar className={classes.avatarImage}>
                    {member.firstName[0] + member.lastName[0]}
                  </Avatar>
                );
              })}
            {data.board.members &&
              data.board.members.length >= 8 &&
              data.board.members.slice(0, 8).map((member) => {
                return member.photo ? (
                  <Avatar className={classes.avatarImage} src={member.photo} />
                ) : (
                  <Avatar className={classes.avatarImage}>
                    {member.firstName[0] + member.lastName[0]}
                  </Avatar>
                );
              })}
          </div>
          {data.board.members && data.board.members.length >= 8 && (
            <div className={classes.numberIcon}>
              <Typography>...</Typography>
              <Avatar
                style={{ marginLeft: '5px' }}
                className={classes.avatarImage}
              >
                +{data.board.members.length - 8}
              </Avatar>
            </div>
          )}
          <AddCircleOutlineIcon
            className={classNames(classes.addNewIcon, classes.addNewMember)}
          />
          <div className={classes.menu}>
            <IconButton
              ref={anchorRef}
              aria-controls={openMenu ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              classes={{ root: classes.menuButton }}
            >
              <MenuIcon />
            </IconButton>
            <Popper
              open={openMenu}
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
                        autoFocusItem={openMenu}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem classes={{ root: classes.menuItem }}>
                          Settings
                        </MenuItem>
                        <MenuItem classes={{ root: classes.menuItem }}>
                          Members
                        </MenuItem>
                        <MenuItem classes={{ root: classes.menuItem }}>
                          Delete
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      )}
      <div className={classes.lists}>
        {data &&
          data.board.lists &&
          data.board.lists.map((list, index) => {
            return (
              <div key={index} className={classes.list}>
                <div className={classes.listTitleWrapper}>
                  <Typography className={classes.listTitle}>
                    {list.name}
                  </Typography>
                </div>
                <div className={classes.listItemsWrapper}>
                  {list.showsOnList.map((showOnList, index) => {
                    return (
                      <div key={index} className={classNames(classes.showRow)}>
                        <CardMedia
                          className={classes.poster}
                          component="img"
                          alt="Poster"
                          height="30"
                          width="20"
                          image={showOnList.show.posterUrl}
                          title="Poster"
                        />
                        <div>
                          <Typography className={classes.showTitle}>
                            {showOnList.show.title}
                          </Typography>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        <Button
          onClick={() => setOpen(true)}
          classes={{ root: classes.createNewButton }}
        >
          <div className={classes.addNewCard}>
            <AddCircleOutlineIcon className={classes.addNewIcon} />
            <Typography className={classes.createNewButtonText}>
              Create new
            </Typography>
          </div>
        </Button>
        <CreateListPopup
          open={open}
          boardId={id}
          onClose={onCloseHandler}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default OpenBoard;
