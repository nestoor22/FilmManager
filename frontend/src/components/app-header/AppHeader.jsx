import React from 'react';
import classNames from 'classnames';
import { useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';

import SearchIcon from 'assets/icons/search.svg';
import { LOG_OUT } from 'graphql/mutations/auth';
import { USER_NAME } from 'graphql/queries/user';
import { SHOWS } from 'graphql/queries/shows';

import useStyles from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ShowDetailsDialog } from '../index';

let timer;

export default function AppHeader({ className }) {
  const classes = useStyles();

  const history = useHistory();
  const { data } = useQuery(USER_NAME);
  const [logOut] = useMutation(LOG_OUT);
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [hideShowsDropdown, setHideShowsDropdown] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState();
  const [showContent, setShowContent] = React.useState({});
  const [search, setSearch] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const prevOpen = React.useRef(open);

  const [getShows, { data: showsData, loading }] = useLazyQuery(SHOWS);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogOut = () => {
    logOut().then(() => {});
    history.push('/signIn');
  };

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

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleChange = (e) => {
    const searchValue = e?.target.value;
    setSearch(e?.target.value);
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      getShows({
        variables: {
          startWith: searchValue,
        },
      });
    }, 1500);
  };
  React.useEffect(() => {}, [data]);

  return (
    <AppBar className={classNames(classes.header, className)} position="static">
      <div className={classes.logo}>LOGO</div>
      <div className={classes.search}>
        <Input
          disableUnderline={true}
          value={search}
          onBlur={() => setFocused(!focused)}
          onChange={handleChange}
          id="input-with-icon-adornment"
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            focused: classes.inputRootFocused,
            input: classes.input,
            disabled: classes.disabledInput,
          }}
          startAdornment={
            <InputAdornment className={classes.iconWrapper}>
              <img alt="" src={SearchIcon} />
            </InputAdornment>
          }
        />
        {search &&
          !hideShowsDropdown &&
          showsData &&
          showsData.shows?.length !== 0 && (
            <div className={classes.showsPopup}>
              {showsData?.shows?.map((showInfo) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        setShowContent(showInfo);
                        setOpenDialog(true);
                      }}
                      className={classes.showRow}
                    >
                      <CardMedia
                        className={classes.poster}
                        component="img"
                        alt="Poster"
                        height="80"
                        width="60"
                        image={showInfo.posterUrl}
                        title="Poster"
                        classes={{
                          root: classes.rootMedia,
                        }}
                      />
                      <div>
                        <Typography className={classes.showTitle}>
                          {showInfo.title}
                        </Typography>
                        <Typography className={classes.showTitle}>
                          {showInfo.releaseDate}
                        </Typography>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.navigationItems}>
          <MenuLink activeOnlyWhenExact={true} to="/boards" label="Boards" />
          <MenuLink to="/#" label="Communities" />
          <MenuLink to="/#" label="People" />
          <MenuLink to="/#" label="Events" />
          <MenuLink to="/#" label="About" />
          {data && data.userName && (
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                classes={{ root: classes.button }}
              >
                {data.userName.firstName} {data.userName.lastName}
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
                              handleClose(e);
                              history.push('/account');
                            }}
                          >
                            Profile
                          </MenuItem>
                          <MenuItem
                            classes={{ root: classes.menuItem }}
                            onClick={(e) => {
                              handleClose(e);
                              history.push('/account/settings');
                            }}
                          >
                            Settings
                          </MenuItem>
                          <MenuItem
                            classes={{ root: classes.menuItem }}
                            onClick={handleLogOut}
                          >
                            Log-out
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
          {data && !data.userName && <MenuLink to="/signIn" label="Sign In" />}
        </ul>
      </nav>
      <ShowDetailsDialog
        show={showContent}
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
      />
    </AppBar>
  );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  const classes = useStyles();

  return (
    <li className={classes.navigationItem}>
      <Link
        className={classNames(classes.navigationItemLink, {
          [classes.activeNavigationLink]: match,
        })}
        to={to}
      >
        {label}
      </Link>
    </li>
  );
}
