import React from 'react';
import { Container } from '@material-ui/core';
import moment from 'moment';

import FilterInput from '../../components/FilterInput';
import TruckTimeline from '../../components/TruckTimeline';
import Timeline from '../../components/Timeline';

import { processTrucksData, processData } from '../../lib';
import { TRUCK_DATA } from '../../lib/constants';

import './Home.scss';

export const Home = () => {
  const initialData = React.useMemo(() => processData(TRUCK_DATA), []);
  const [selectedTruck, setSelectedTruck] = React.useState(null);

  
  const trucks = React.useMemo(() => processTrucksData(TRUCK_DATA), []);

  return (
    <div className="home">
      <Container>
        <div className="filter-wrapper">
          <FilterInput
            trucks={initialData.trucks}
            onChange={(_event, truck) => setSelectedTruck(truck)}
          />
        </div>
        <TruckTimeline
          trucks={selectedTruck ? [selectedTruck] : initialData.trucks}
          orders={initialData.orders}
        />
        <div className="timeline-wrapper">
          <Timeline
            rows={selectedTruck ? {[selectedTruck.id]: trucks[selectedTruck.id]} : trucks}
            initialDate={moment(initialData.orders[0].start_time)}
          />
        </div>
      </Container>
    </div>
  );
};
