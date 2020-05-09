import React from 'react';
import classNames from 'classnames';
import { useQuery } from '@apollo/react-hooks';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';

import { USER_NAME } from 'graphql/queries/user';

import useStyles from './styles';

export default function AppHeader({ className }) {
  const classes = useStyles();

  const history = useHistory();
  const { data } = useQuery(USER_NAME);

  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const prevOpen = React.useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
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

  React.useEffect(() => {}, [data]);

  return (
    <AppBar className={classNames(classes.header, className)} position="static">
      <nav className={classes.navigation}>
        <ul className={classes.navigationItems}>
          <MenuLink activeOnlyWhenExact={true} to="/boards" label="Boards" />
          <MenuLink to="/lists" label="Lists" />
          <MenuLink to="/#" label="Communities" />
          <MenuLink to="/#" label="Messages" />
          {data && data.user && (
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                classes={{ root: classes.button }}
              >
                {data.user.firstName} {data.user.lastName}
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
                            onClick={handleClose}
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
          {data && !data.user && <MenuLink to="/login" label="Login" />}
        </ul>
      </nav>
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
