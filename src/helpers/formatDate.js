export const formatDateFunc = (seconds, nanoseconds) => {
  const milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1000000);

  const date = new Date(milliseconds);

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formatedDate = formatter.format(date);

  return { formatedDate };
};
