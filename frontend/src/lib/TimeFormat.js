const timeFormat = (minute) => {
  const hours = Math.floor(minute / 60);
  const minuteRemainder = minute % 60;
  return `${hours}h ${minuteRemainder}m`;
};

export default timeFormat;
