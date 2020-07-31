import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const MOCK_DATA = {
  lotCode: '11YVCHAR001',
  volume: 1000,
  description: '2011 Yarra Valley Chardonnay',
  tankCode: 'T25-01',
  productState: 'Ready for bottling',
  ownerName: 'YV Wines Pty Ltd',
  components: [
    { percentage: 80, year: 2011, variety: 'Chardonnay', region: 'Yarra Valley' },
    { percentage: 10, year: 2010, variety: 'Chardonnay', region: 'Macedon' },
    { percentage: 5, year: 2011, variety: 'Pinot Noir', region: 'Mornington' },
    { percentage: 5, year: 2010, variety: 'Pinot Noir', region: 'Macedon' },
  ],
};

describe('<Table />', () => {
  test('shows the table has mounted', () => {
    const testMessage = '2011 Yarra Valley Chardonnay';
    render(<Table wine={MOCK_DATA} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
