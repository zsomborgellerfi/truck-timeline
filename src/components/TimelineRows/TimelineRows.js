import { useMemo } from 'react';
import { getRelevantTrucksByDate } from '../../lib';
import TruckRow from '../TruckRow';
import './TimelineRows.scss';

export const TimelineRows = ({ trucks, selectedDate }) => {
  const relevantTrucks = useMemo(
    () => getRelevantTrucksByDate(trucks, selectedDate),
    [trucks, selectedDate]
  );
  return (
    <div className={'timeline-rows'} data-testid="timeline-rows">
      {relevantTrucks.length === 0 && (
        <div className="no-trucks-message">No relevant orders found. :(</div>
      )}
      {relevantTrucks.map((truck, index) => {
        return (
          <div key={truck.id} className="truck-row-wrapper">
            <TruckRow index={index} truck={truck} selectedDate={selectedDate} />
          </div>
        );
      })}
    </div>
  );
};
