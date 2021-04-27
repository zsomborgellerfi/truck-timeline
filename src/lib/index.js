import moment from 'moment';

export const processTrucksData = (truckData) => {
  const orders = truckData.orders.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  const trucks = truckData.trucks.reduce((acc, curr) => {
    acc[curr.name] = {
      ...curr,
      id: curr.name,
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

export const createTrucksArray = (trucks) => {
  return trucks.map((truck) => ({ id: truck.name, title: truck.name }));
};

export const getFullWidth = () => {

}