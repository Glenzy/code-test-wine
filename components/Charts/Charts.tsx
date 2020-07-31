import React from 'react';
import { Wrapper, ChartWrapper, BarChartWrapper } from './Charts.styles';
import PieChart from 'components/PieChart';
import BarChart from 'components/BarChart';

const Chart = ({ data }) => {
  const { byYear, byVariety, byRegion, byYearVariety } = data;

  return (
    <Wrapper>
      <ChartWrapper>
        <h4>By year</h4>
        <PieChart data={byYear} />
      </ChartWrapper>
      <ChartWrapper>
        <h4>By variety</h4>
        <PieChart data={byVariety} />
      </ChartWrapper>
      <ChartWrapper>
        <h4>By region</h4>
        <PieChart data={byRegion} />
      </ChartWrapper>
      <h4>By year and variety</h4>
      <BarChartWrapper>
        <BarChart data={byYearVariety} />
      </BarChartWrapper>
    </Wrapper>
  );
};

export default Chart;
