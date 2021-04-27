import {
  HOURS_IN_DAY,
  ORDER_HEIGHT,
  SIDEBAR_WIDTH,
  TIMELINE_WIDTH,
  WIDTH_PER_HOUR,
} from '../../lib/constants';
import OrderMarker from '../OrderMarker';
import './TruckRow.scss';

export const TruckRow = ({ truck, selectedDate, idx }) => {
  const { orders } = truck;
  const currentOrders = orders.reduce((acc, curr) => {
    if (
      selectedDate.isBefore(curr.from, 'day') ||
      selectedDate.isAfter(curr.to, 'day')
    ) {
      return acc;
    }
    const orderStartsBeforeDate = curr.from.isBefore(selectedDate, 'day');
    const orderEndsAfterDate = curr.to.isAfter(selectedDate, 'day');
    curr.localeFrom = curr.from.clone();
    curr.localeTo = curr.to.clone();

    if (orderStartsBeforeDate) {
      curr.localeFrom.set('date', selectedDate.date());
      curr.localeFrom.set('hour', 0);
      curr.localeFrom.set('minute', 0);
    }
    if (orderEndsAfterDate) {
      curr.localeTo.set('date', selectedDate.date());
      curr.localeTo.set('hour', 24);
      curr.localeTo.set('minute', 0);
    }
    acc.push(curr);
    return acc;
  }, []);

  if (!currentOrders.length) return null;
  return (
    <div className={'truck-row'} style={{ height: ORDER_HEIGHT }}>
      <span className={'truck-row_sidebar'} style={{width: SIDEBAR_WIDTH, height: ORDER_HEIGHT}}>{truck.name}</span>
      <div
        className={`truck-row_lines ${
          idx % 2 ? 'truck-row_lines--odd' : 'truck-row_lines--even'
        }`}
        style={{left: SIDEBAR_WIDTH, width: TIMELINE_WIDTH}}
      >
        {[...Array(HOURS_IN_DAY)].map((_e, i) => (
          <span
            key={i}
            className={'truck-row_lines--block'}
            style={{ left: i * WIDTH_PER_HOUR, width: WIDTH_PER_HOUR }}
          />
        ))}
      </div>
      {currentOrders.map((order) => (
        <OrderMarker key={order.id} order={order} />
      ))}
    </div>
  );
};
