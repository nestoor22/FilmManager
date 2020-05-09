import React from 'react';

import Typography from '@material-ui/core/Typography';

import { SimplePieChart, CustomChartLegend } from 'components';

import useStyles from './styles';

const BoardsStatisticsTab = ({ title, chartData, colorsInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.tab}>
      <Typography className={classes.tabTitle}>{title}</Typography>
      <div className={classes.chartWrapper}>
        <SimplePieChart data={chartData} colorsInfo={colorsInfo} />
        <CustomChartLegend
          legendTitle="42"
          legendData={chartData}
          legendColors={colorsInfo}
        />
      </div>
    </div>
  );
};

export default BoardsStatisticsTab;
