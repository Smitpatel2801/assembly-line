import moment from "moment";

const calculateRemainingTime = (timestamp) => {
  const currentTime = Date.now();
  const timeDifference = timestamp - currentTime;
  const duration = moment.duration(timeDifference);
  const hours = duration.hours();
  const minutes = duration.minutes();
  return { hours, minutes, timeDifference };
};

export { calculateRemainingTime };
