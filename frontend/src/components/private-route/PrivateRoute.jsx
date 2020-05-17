import React from 'react';
import {  Route } from 'react-router-dom';

// Don't work on staging
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     children={''}
//     render={props =>
//       Cookies.get('csrftoken') ? (
//         <Component {...props}>{rest.children}</Component>
//       ) : (
//         <Redirect
//           to={{ pathname: '/login', state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    children={''}
    render={props => <Component {...props}>{rest.children}</Component>}
  />
);

export default PrivateRoute;
