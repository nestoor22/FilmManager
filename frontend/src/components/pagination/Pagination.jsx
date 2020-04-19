import React from "react";

import { Typography } from "@material-ui/core";
import LabPagination from "@material-ui/lab/Pagination";
import LabPaginationItem from "@material-ui/lab/PaginationItem";

import useStyles from "./styles";

const Pagination = ({ total, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.paginationContainer}>
        <LabPagination
          variant="outlined"
          hideNextButton={false}
          hidePrevButton={false}
          renderItem={(item) => (
            <LabPaginationItem
              classes={{
                root: classes.itemRoot,
                ellipsis: classes.itemEllipsis,
                selected: classes.itemSelected,
              }}
              {...item}
            />
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default Pagination;
