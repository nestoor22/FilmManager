import React from "react";

import useStyles from "./styles";
import BoardsStatisticsTab from "../../components/boards-statistics-tabs/BoardsStatisticsTab";
import AppHeader from "../../components/app-header/AppHeader";

const testChartData = [
  { name: "Private", value: 43, legendTitle: "Private" },
  { name: "Public", value: 57, legendTitle: "Public" },
];
const testColors = {
  Private: "#034a5a",
  Public: "#12c3e2",
};
const Boards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.verticalTabs}>
        <BoardsStatisticsTab
          title="Your boards"
          chartData={testChartData}
          colorsInfo={testColors}
        />
          <BoardsStatisticsTab
              title="Your boards"
              chartData={testChartData}
              colorsInfo={testColors}
          />
      </div>
    </div>
  );
};

export default Boards;
