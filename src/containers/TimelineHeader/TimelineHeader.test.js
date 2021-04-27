import { render, screen } from '@testing-library/react';
import { TimelineHeader } from './TimelineHeader';
import moment from 'moment';

const testSelectedDate = moment(1)
test('renders TimelineHeader component', () => {
  render(<TimelineHeader selectedDate={testSelectedDate}/>);
  expect(screen.getByTestId("timeline-header-date")).toHaveTextContent("January 1st 1970")
});
