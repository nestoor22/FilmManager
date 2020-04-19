import React from "react";

import Chip from "@material-ui/core/Chip";
import Pagination from "../pagination/Pagination";
import useStyles from "./styles";

function CustomChips({ chipsElements }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const pageHandler = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabsRoot}>
        {chipsElements &&
          chipsElements.map((element) => {
            return (
              <Chip
                label={element.name}
                className={classes.customChip}
                variant="outlined"
              />
            );
          })}
      </div>
      <Pagination page={page} count={10} onChange={pageHandler} />
    </div>
  );
}

export default CustomChips;
