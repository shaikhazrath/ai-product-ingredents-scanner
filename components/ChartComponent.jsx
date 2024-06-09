import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ChartComponent = ({ good, bad, neutral }) => {
  const data = [
    { name: 'Good', value: good.length },
    { name: 'Bad', value: bad.length },
    { name: 'Neutral', value: neutral.length }
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <defs>
          <linearGradient id="colorGood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00FF08" />
            <stop offset="100%" stopColor="#009607" />
          </linearGradient>
          <linearGradient id="colorBad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f44336" />
            <stop offset="100%" stopColor="#810000" />
          </linearGradient>
          <linearGradient id="colorNeutral" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffeb3b" />
            <stop offset="100%" stopColor="#867900" />
          </linearGradient>
        </defs>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          dataKey="value"

        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`url(#color${entry.name})`}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
