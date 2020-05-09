import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const SimplePieChart = ({ data, colorsInfo }) => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((item, index) => (
          <Cell key={`cell-${index}`} fill={colorsInfo[item.name]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default SimplePieChart;
