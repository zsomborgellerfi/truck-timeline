import TimelineRow from '../TimelineRow';
import './TimelineRows.scss';

export const TimelineRows = ({ rows, selectedDate }) => {
  return (
    <div className={'timeline-rows'}>
      {Object.keys(rows).map((key, idx) => {
        return (
          <TimelineRow
            key={key}
            idx={idx}
            row={rows[key]}
            selectedDate={selectedDate}
          />
        );
      })}
    </div>
  );
};
