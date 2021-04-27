import { calculateDuration } from '../../lib';
import { SIDEBAR_WIDTH, WIDTH_PER_HOUR } from '../../lib/constants';
import './OrderMarker.scss';
export const OrderMarker = ({ order }) => {
  const duration = calculateDuration(order.localeFrom, order.localeTo);
  const positionX = order.localeFrom.hour() * WIDTH_PER_HOUR +  order.localeFrom.minutes() * (WIDTH_PER_HOUR / 60)
  return (
    <div
      className={'order-marker'}
      style={{ left: positionX + SIDEBAR_WIDTH, width: duration * WIDTH_PER_HOUR }}
      data-testid={"order-marker"}    >
      {order.name}
    </div>
  );
};
