import { useState } from 'react';
import { ROOT_WIDTH } from '../../lib/constants';
import TimelineHeader from '../TimelineHeader';
import TimelineRows from '../TimelineRows';
import './Timeline.scss';

export const Timeline = ({ rows, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  return (
    <div className={'timeline'} style={{ width: ROOT_WIDTH }}>
      <TimelineHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TimelineRows rows={rows} selectedDate={selectedDate} />
    </div>
  );
};
