import { RadialChart } from 'react-vis';
import { PieChartProps } from 'types';

/**
 *
 * @param data
 * data is an object of a key and percentage. The key can be a variety or year or any other key.
 *
 * This attempts to output a visualisation of year and variety wines. However data visualisation while
 * trying to get nice charts turned out to be too time consuming and I have extremely limited time ;o( hehe).
 */

const PieChart = ({ data }: PieChartProps) => {
  const { breakdown } = data;

  const chartData = breakdown.map((item) => {
    return {
      angle: item.percentage,
      key: `${item.key}: `,
      label: `${item.percentage}%`,
    };
  });

  return (
    <>
      <ul>
        {chartData.map((data, index) => {
          if (index < 5) {
            return (
              <li key={index}>
                {data.key} <b>{data.label}</b>
              </li>
            );
          }
        })}
      </ul>
      <RadialChart data={chartData} width={250} height={250} />
    </>
  );
};

export default PieChart;
