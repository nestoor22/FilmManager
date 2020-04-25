import React from "react";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Typography from "@material-ui/core/Typography";
import AppHeader from "../../components/app-header/AppHeader";
import BoardsStatisticsTab from "../../components/boards-statistics-tabs/BoardsStatisticsTab";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";

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
      <div className={classes.content}>
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
        <div className={classes.boardsCardsWrapper}>
          <Typography className={classes.boardsBlockTitle}>
            Latest visited boards
          </Typography>
          <div className={classes.boardsRow}>
            <div
              style={{ backgroundColor: "red" }}
              className={classes.boardCard}
            >
              <Typography
                className={classes.boardTitle}
              >
                TEST 1
              </Typography>
            </div>
            <div
              style={{ backgroundColor: "yellow" }}
              className={classes.boardCard}
            >
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div
              style={{ backgroundColor: "gray" }}
              className={classes.boardCard}
            >
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div
              style={{ backgroundColor: "#2255ff" }}
              className={classes.boardCard}
            >
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
          </div>
          <Typography className={classes.boardsBlockTitle}>
            Personal boards
          </Typography>
          <div className={classes.boardsRow}>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <Button classes={{ root: classes.createNewButton }}>
              <div className={classes.addNewCard}>
                <AddCircleOutlineIcon
                  style={{ fontSize: 50, fill: "#fff" }}
                ></AddCircleOutlineIcon>
                <Typography className={classes.createNewButtonText}>
                  Create new
                </Typography>
              </div>
            </Button>
          </div>
          <Typography className={classes.boardsBlockTitle}>
            Teams boards
          </Typography>
          <div className={classes.boardsRow}>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <div className={classes.boardCard}>
              <Typography className={classes.boardTitle}>TEST 1</Typography>
            </div>
            <Button classes={{ root: classes.createNewButton }}>
              <div className={classes.addNewCard}>
                <AddCircleOutlineIcon
                  style={{ fontSize: 50, fill: "#fff" }}
                ></AddCircleOutlineIcon>
                <Typography className={classes.createNewButtonText}>
                  Create new
                </Typography>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
