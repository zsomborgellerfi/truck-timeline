import { render, screen } from '@testing-library/react';
import moment from 'moment';
import { Timeline } from './Timeline';

const testTimelineProps = {
  trucks:  {},
  initialDate: moment(1)
}

test('renders Timeline component', () => {
  render(<Timeline {...testTimelineProps}/>);
  expect(screen.getByTestId("timeline-header")).toBeTruthy()
  expect(screen.getByTestId("timeline-rows")).toBeTruthy()
});
