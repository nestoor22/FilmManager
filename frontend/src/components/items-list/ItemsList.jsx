import React from "react";
import { useQuery } from "@apollo/react-hooks";

import ItemCard from "../item-card/ItemCard";

import useStyles from "./styles";
import Pagination from "../pagination/Pagination";

function ItemsList({ query, showType }) {
  const classes = useStyles();

  const { data } = useQuery(query, {
    variables: {
      showType: showType,
    },
  });

  return (
    <div className={classes.itemsRoot}>
      {data &&
        data.shows &&
        data.shows.map((show) => {
          return <ItemCard showInfo={show} />;
        })}
      {data && <Pagination page={1} count={data.showsNumberOfPages} />}
    </div>
  );
}

export default ItemsList;
