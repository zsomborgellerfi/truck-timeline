import {
  HOURS_IN_DAY,
  TRUCK_ROW_HEIGHT,
  SIDEBAR_WIDTH,
  TIMELINE_WIDTH,
  WIDTH_PER_HOUR,
} from '../../lib/constants';
import OrderMarker from '../OrderMarker';
import './TruckRow.scss';

export const TruckRow = ({ truck }) => {
  return (
    <div
      className={'truck-row'}
      style={{ height: TRUCK_ROW_HEIGHT }}
      data-testid="truck-row"
    >
      <span
        className={'truck-row_sidebar'}
        style={{ width: SIDEBAR_WIDTH, height: TRUCK_ROW_HEIGHT }}
      >
        {truck.name}
      </span>
      <div
        className={`truck-row_lines`}
        style={{ left: SIDEBAR_WIDTH, width: TIMELINE_WIDTH }}
      >
        {[...Array(HOURS_IN_DAY)].map((_e, i) => (
          <span
            key={i}
            className={'truck-row_lines--block'}
            style={{ left: i * WIDTH_PER_HOUR, width: WIDTH_PER_HOUR }}
          />
        ))}
      </div>
      {truck.orders.map((order) => (
        <OrderMarker key={order.id} order={order} />
      ))}
    </div>
  );
};
