import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Button } from '@material-ui/core';

import {
  HOURS_IN_DAY,
  SIDEBAR_WIDTH,
  TIMELINE_WIDTH,
  WIDTH_PER_HOUR,
} from '../../lib/constants';
import { numberToTime } from '../../lib';

import './TimelineHeader.scss';

export const TimelineHeader = ({ selectedDate, setSelectedDate }) => {
  const goToPrevDay = () => {
    setSelectedDate(selectedDate.clone().add(-1, 'd'));
  };
  const goToNextDay = () => {
    setSelectedDate(selectedDate.clone().add(1, 'd'));
  };

  return (
    <div className={'timeline-header_container'} data-testid="timeline-header">
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
          <div data-testid="timeline-header-date">
            {selectedDate.format('MMMM Do YYYY')}
          </div>
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
