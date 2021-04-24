import moment from 'moment';

export const processData = (truckData) => {
  const findTruckByOrderId = (orderId) => {
    return truckData.trucks.find((truck) =>
      truck.assignedOrderId.includes(orderId)
    );
  };
  const createTrucks = (trucks) => {
    return trucks.map((truck) => ({ id: truck.name, title: truck.name }));
  };
  const createOrders = (orders) => {
    return orders.map((order) => ({
      id: order.id,
      group: findTruckByOrderId(order.id)?.name,
      title: order.id,
      start_time: moment(order.from),
      end_time: moment(order.to),
    }));
  };

  return {
    trucks: createTrucks(truckData.trucks),
    orders: createOrders(truckData.orders),
  };
};

export const processTrucksData = (truckData) => {
  const orders = truckData.orders.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  const trucks = truckData.trucks.reduce((acc, curr) => {
    acc[curr.name] = {
      ...curr,
      orders: curr.assignedOrderId.map((orderId) => {
        return {
          ...orders[orderId],
          name: orders[orderId].id,
          from: moment(orders[orderId].from),
          to: moment(orders[orderId].to),
        };
      }),
    };
    return acc;
  }, {});

  return trucks;
};

export const numberToTime = (n) => {
  const hours = n < 10 ? `0${n}` : n;
  const minutes = '00';
  return `${hours}:${minutes}`;
};

export const calculateDuration = (start, end) => {
  const duration = moment.duration(end.diff(start));
  return duration.asHours() ;
};
