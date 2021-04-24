import moment from 'moment'

export const processData = (truckData) => {
  const findTruckByOrderId = (orderId) => {
    return truckData.trucks.find((truck) =>
      truck.assignedOrderId.includes(orderId)
    )
  }
  const createTrucks = (trucks) => {
    return trucks.map((truck) => ({ id: truck.name, title: truck.name }))
  }
  const createOrders = (orders) => {
    return orders.map((order) => ({
      id: order.id,
      group: findTruckByOrderId(order.id).name,
      title: order.id,
      start_time: moment(order.from),
      end_time: moment(order.to),
      canMove: false,
      canResize: false,
      canChangeGroup: false,
    }))
  }

  return {
    trucks: createTrucks(truckData.trucks),
    orders: createOrders(truckData.orders),
  }
}
