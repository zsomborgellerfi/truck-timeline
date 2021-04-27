import { render, screen } from '@testing-library/react';
import moment from 'moment';
import { TimelineRows } from './TimelineRows';

const testTimelineRowsProps = {
  trucks:  {
    'truck1': {
      id: 'truck1',
      name: 'truck1',
      orders: []
    }
  },
  selectedDate: moment(1)
}

test('renders TimelineRows component', () => {
  render(<TimelineRows {...testTimelineRowsProps}/>);
  expect(screen.getByTestId("timeline-rows")).toBeTruthy()
});
