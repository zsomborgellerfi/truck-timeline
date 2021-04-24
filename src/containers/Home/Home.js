import React from 'react'
import { Container } from '@material-ui/core'

import { processData } from '../../lib'
import { TRUCK_DATA } from '../../lib/constants'
import FilterInput from '../../components/FilterInput'
import TruckTimeline from '../../components/TruckTimeline'

import './Home.scss'

export const Home = () => {
  const initialData = React.useMemo(() => processData(TRUCK_DATA), [])
  const [selectedTruck, setSelectedTruck] = React.useState(null)
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
      </Container>
    </div>
  )
}
