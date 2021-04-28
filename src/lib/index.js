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
  return duration.asHours();
};

export const createTrucksArray = (trucks) => {
  return trucks.map((truck) => ({ id: truck.name, title: truck.name }));
};

export const getRelevantOrdersByDate = (truck, selectedDate) => {
  const relevantOrders = truck.orders.reduce((orderAcc, orderCurr) => {
    const isOutOfSelectedDate =
      selectedDate.isBefore(orderCurr.from, 'day') ||
      selectedDate.isAfter(orderCurr.to, 'day');
    if (isOutOfSelectedDate) {
      return orderAcc;
    }
    const orderStartsBeforeDate = orderCurr.from.isBefore(selectedDate, 'day');
    const orderEndsAfterDate = orderCurr.to.isAfter(selectedDate, 'day');
    orderCurr.localeFrom = orderCurr.from.clone();
    orderCurr.localeTo = orderCurr.to.clone();

    if (orderStartsBeforeDate) {
      orderCurr.localeFrom.set('date', selectedDate.date());
      orderCurr.localeFrom.set('hour', 0);
      orderCurr.localeFrom.set('minute', 0);
    }
    if (orderEndsAfterDate) {
      orderCurr.localeTo.set('date', selectedDate.date());
      orderCurr.localeTo.set('hour', 24);
      orderCurr.localeTo.set('minute', 0);
    }
    orderAcc.push(orderCurr);
    return orderAcc;
  }, []);
  return relevantOrders;
};

export const getRelevantTrucksByDate = (trucks, selectedDate) => {
  const relevantTrucks = Object.keys(trucks).reduce((trucksAcc, trucksCurr) => {
    const relevantOrders = getRelevantOrdersByDate(
      trucks[trucksCurr],
      selectedDate
    );
    if (relevantOrders.length) {
      trucksAcc.push({
        ...trucks[trucksCurr],
        orders: relevantOrders,
      });
    }
    return trucksAcc;
  }, []);
  return relevantTrucks;
};
