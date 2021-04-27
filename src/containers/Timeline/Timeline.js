import { useState } from 'react';
import TimelineHeader from '../../components/TimelineHeader';
import TimelineRows from '../../components/TimelineRows';
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
