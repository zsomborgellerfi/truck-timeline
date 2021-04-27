import { useState } from 'react';
import TimelineHeader from '../TimelineHeader';
import TimelineRows from '../TimelineRows';
import './Timeline.scss';

export const Timeline = ({ trucks, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  return (
    <div className={'timeline'}>
      <TimelineHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        
      />
      <TimelineRows
        trucks={trucks}
        selectedDate={selectedDate}
      />
    </div>
  );
};
