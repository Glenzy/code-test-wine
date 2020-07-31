import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from 'react-vis';
import { BarChartProps } from 'types';

/**
 *
 * @param data
 * data is an object of a key and percentage. The key can be a variety or year or any other key.
 *
 * This attempts to output a visualisation of year and variety wines. However data visualisation while
 * trying to get nice charts turned out to be too time consuming and I have extremely limited time ;o( hehe).
 */

const BarChart = ({ data }: BarChartProps) => {
  const {
    breakdown: { year, variety },
  } = data;

  const getData = (data) =>
    data.map((item, index) => {
      return {
        x: index,
        y: item.percentage,
      };
    });

  const yearData = getData(year);
  const varietyData = getData(variety);

  return (
    <XYPlot width={250} height={250}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={yearData} />
      <VerticalBarSeries data={varietyData} />
    </XYPlot>
  );
};

export default BarChart;
