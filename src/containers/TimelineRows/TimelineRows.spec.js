import { render, screen } from '@testing-library/react';
import moment from 'moment';
import { TimelineRows } from './TimelineRows';

const testTimelineRowsProps = {
  trucks: {
    truck1: {
      id: 'truck1',
      name: 'truck1',
      orders: [
        {
          id: 1,
          from: moment(1),
          to: moment(3),
        },
      ],
    },
  },
  selectedDate: moment(2),
};

test('renders TimelineRows component', () => {
  render(<TimelineRows {...testTimelineRowsProps} />);
  expect(screen.getByTestId('timeline-rows')).toBeTruthy();
});

test('renders 1 TruckRow component', () => {
  render(<TimelineRows {...testTimelineRowsProps} />);
  expect(screen.getAllByTestId('truck-row')).toHaveLength(1);
});
