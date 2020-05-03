import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classNames from "classnames";

import AppBar from "@material-ui/core/AppBar";

import useStyles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../graphql/queries/user";

export default function AppHeader({ className }) {
  const classes = useStyles();

  const { data } = useQuery(USER);

  React.useEffect(() => {}, [data]);

  return (
    <AppBar className={classNames(classes.header, className)} position="static">
      <nav className={classes.navigation}>
        <ul className={classes.navigationItems}>
          <MenuLink to="/boards" label="Boards" />
          <MenuLink to="/lists" label="Lists" />
          <MenuLink to="/#" label="Communities" />
          <MenuLink to="/#" label="Messages" />
          {data && data.user && (
            <div>
              <MenuLink
                label={`${data.user.firstName} ${data.user.lastName}`}
              />
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
