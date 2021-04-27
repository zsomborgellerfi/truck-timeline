import { render, screen } from '@testing-library/react';
import { OrderMarker } from './OrderMarker';
import moment from 'moment';

const testOrder = {
  id: 1,
  name: 'test order',
  localeFrom: moment(1),
  localeTo: moment(1)
}

test('renders OrderMarker component', () => {
  render(<OrderMarker  order={testOrder}/>);
  expect(screen.getByTestId("order-marker")).toHaveTextContent("test order")
});
