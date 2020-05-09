import React from 'react';

import Chip from '@material-ui/core/Chip';

import { Pagination } from 'components';

import useStyles from './styles';

function CustomChips({ chipsElements }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [offset, setOffset] = React.useState(0);

  const chipsPerPage = 25;
  const pagesNumber = Math.ceil(chipsElements.length / chipsPerPage);
  const pageHandler = (event, value) => {
    setOffset(chipsPerPage * (value - 1));
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabsRoot}>
        {chipsElements &&
          chipsElements
            .slice(offset, offset + chipsPerPage)
            .map((element, index) => {
              return (
                <Chip
                  key={index}
                  label={element.name}
                  className={classes.customChip}
                  variant="outlined"
                />
              );
            })}
      </div>
      <Pagination page={page} count={pagesNumber} onChange={pageHandler} />
    </div>
  );
}

export default CustomChips;
