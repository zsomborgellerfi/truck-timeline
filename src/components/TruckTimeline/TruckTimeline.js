import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import 'react-calendar-timeline/lib/Timeline.css'

export const TruckTimeline = ({ trucks, orders }) => {
  return (
    <Timeline
      groups={trucks}
      items={orders}
      defaultTimeStart={moment(orders[0].start_time).add(-6, 'h')}
      defaultTimeEnd={moment(orders[0].end_time).add(6, 'h')}
    />
  )
}
