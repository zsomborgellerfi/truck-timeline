import React from 'react';
import { Container } from '@material-ui/core';
import moment from 'moment';

import FilterInput from '../../components/FilterInput';
import Timeline from '../../containers/Timeline';

import { processTrucksData } from '../../lib';
import { TRUCK_DATA } from '../../lib/constants';

import './Home.scss';

export const Home = () => {
  const [selectedTruck, setSelectedTruck] = React.useState(null);
  const trucks = React.useMemo(() => processTrucksData(TRUCK_DATA), []);

  console.log(trucks,TRUCK_DATA, selectedTruck)
  return (
    <div className="home">
      <Container>
        <div className="filter-wrapper">
          <FilterInput
            trucks={trucks}
            onChange={(_event, truck) => setSelectedTruck(truck)}
          />
        </div>
        <div className="timeline-wrapper">
          <Timeline
            trucks={selectedTruck ? {[selectedTruck.id]: trucks[selectedTruck.id]} : trucks}
            initialDate={moment(TRUCK_DATA.orders[0].from)}
          />
        </div>
      </Container>
    </div>
  );
};
