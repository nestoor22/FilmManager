import React from "react";
import { useQuery } from "@apollo/react-hooks";

import ItemCard from "../item-card/ItemCard";

import useStyles from "./styles";

function ItemsList({ query, showType }) {
  const classes = useStyles();

  const { data, refetch } = useQuery(query, {
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
    </div>
  );
}

export default ItemsList;
