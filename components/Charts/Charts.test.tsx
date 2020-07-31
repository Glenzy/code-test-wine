import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Charts from './Charts';

const MOCK_DATA = {
  byYear: {
    breakDownType: 'year',
    breakdown: [
      { key: 2011, percentage: 85 },
      { key: 2010, percentage: 15 },
    ],
  },
  byVariety: {
    breakDownType: 'variety',
    breakdown: [
      { key: 'Chardonnay', percentage: 90 },
      { key: 'Pinot Noir', percentage: 10 },
    ],
  },
  byRegion: {
    breakDownType: 'region',
    breakdown: [
      { key: 'Yarra Valley', percentage: 80 },
      { key: 'Macedon', percentage: 15 },
      { key: 'Mornington', percentage: 5 },
    ],
  },
  byYearVariety: {
    breakDownType: 'year and variety',
    breakdown: {
      year: [
        { key: 2011, percentage: 85 },
        { key: 2010, percentage: 15 },
      ],
      variety: [
        { key: 'Chardonnay', percentage: 90 },
        { key: 'Pinot Noir', percentage: 10 },
      ],
    },
  },
};

describe('<Charts />', () => {
  test('shows the charts have mounted', () => {
    const testMessage = 'By year';
    render(<Charts data={MOCK_DATA} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
