import { render, screen } from '@testing-library/react';
import moment from 'moment';
import { TruckRow } from './TruckRow';

const testTruckRowProps = {
  truck: {
    orders: [
      {
        id: '1',
        name: 'order 1',
        from: moment('1970-01-01'),
        to: moment('1970-01-02'),
      },
    ],
  },
  selectedDate: moment(1),
  index: 0,
};

test('renders TruckRow component', () => {
  render(<TruckRow {...testTruckRowProps} />);
  expect(screen.getByTestId('truck-row')).toHaveTextContent('order 1');
});
