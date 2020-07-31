import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Search from './Search';

const MOCK_DATA = [
  {
    lotCode: '11YVCHAR001',
    volume: 1000,
    description: '2011 Yarra Valley Chardonnay',
    tankCode: 'T25-01',
    productState: 'Ready for bottling',
    ownerName: 'YV Wines Pty Ltd',
    components: [],
  },
];
describe('<Search />', () => {
  test('shows the search has mounted', () => {
    render(<Search wines={MOCK_DATA} />);
    expect(screen.getByLabelText(/Search Filter/i)).toBeInTheDocument();
  });
});
