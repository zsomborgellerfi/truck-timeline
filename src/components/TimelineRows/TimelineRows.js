import TruckRow from '../TruckRow';
import './TimelineRows.scss';

export const TimelineRows = ({ trucks, selectedDate }) => {
  return (
    <div className={'timeline-rows'}>
      {Object.keys(trucks).map((truckId, idx) => {
        return (
          <TruckRow
            key={truckId}
            idx={idx}
            truck={trucks[truckId]}
            selectedDate={selectedDate}
          />
        );
      })}
    </div>
  );
};
