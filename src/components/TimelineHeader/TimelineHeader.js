import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import {
  HOURS_IN_DAY,
  SIDEBAR_WIDTH,
  TIMELINE_WIDTH,
  WIDTH_PER_HOUR,
} from '../../lib/constants';
import { numberToTime } from '../../lib';
import './TimelineHeader.scss';
import { Button } from '@material-ui/core';

export const TimelineHeader = ({ selectedDate, setSelectedDate }) => {
  const goToPrevDay = () => {
    setSelectedDate(selectedDate.clone().add(-1, 'd'));
  };
  const goToNextDay = () => {
    setSelectedDate(selectedDate.clone().add(1, 'd'));
  };

  return (
    <div className={'timeline-header_container'}>
      <div
        className={'timeline-header'}
        style={{ marginLeft: SIDEBAR_WIDTH, width: TIMELINE_WIDTH }}
      >
        <div className={'timeline-header_days'}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackOutlinedIcon />}
            onClick={goToPrevDay}
          >
            Previous
          </Button>
          <div>{selectedDate.format('MMMM Do YYYY')}</div>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardOutlinedIcon />}
            onClick={goToNextDay}
          >
            Next
          </Button>
        </div>
        <div className={'timeline-header_hours'}>
          {[...Array(HOURS_IN_DAY)].map((_e, i) => (
            <span
              key={i}
              className={'hour-marker'}
              style={{ width: WIDTH_PER_HOUR }}
            >
              {numberToTime(i)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
