import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h4 {
    text-align: center;
    margin: 1rem;
  }
  li {
    text-align: center;
  }
`;

export const ChartWrapper = styled.div`
  flex-basis: 30%;
  max-width: 30%;
  justify-content: center;
  > div {
    margin: auto;
  }
`;

export const BarChartWrapper = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: inline-flex;
  justify-content: center;
`;
