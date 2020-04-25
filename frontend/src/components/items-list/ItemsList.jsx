import React from "react";
import { useQuery } from "@apollo/react-hooks";

import ItemCard from "../item-card/ItemCard";

import useStyles from "./styles";
import Pagination from "../pagination/Pagination";

function ItemsList({ query, showType }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const pageHandler = (event, value) => {
    setPage(value);
  };

  const { data } = useQuery(query, {
    variables: {
      showType: showType,
      page: page - 1,
    },
  });

  return (
    <div className={classes.itemsRoot}>
      {data &&
        data.shows &&
        data.shows.map((show) => {
          return <ItemCard showInfo={show} />;
        })}
      {data && (
        <Pagination
          page={page}
          onChange={pageHandler}
          count={data.showsNumberOfPages}
        />
      )}
    </div>
  );
}

export default ItemsList;
