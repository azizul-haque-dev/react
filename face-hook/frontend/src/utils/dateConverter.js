export function dateConver(date) {
  const now = new Date(); // Current time
  const past = new Date(date); // Time passed in argument
  const diffInSeconds = Math.floor((now - past) / 1000); // Total time difference in seconds

  const timeUnits = [
    { label: "year", seconds: 31536000 }, // 12 months
    { label: "month", seconds: 2592000 }, // 30 days
    { label: "day", seconds: 86400 }, // 24 hours
    { label: "hour", seconds: 3600 }, // 60 minutes
    { label: "min", seconds: 60 }, // 60 seconds
    { label: "sec", seconds: 1 } // 1 second
  ];

  for (const unit of timeUnits) {
    const value = Math.floor(diffInSeconds / unit.seconds);
    if (value > 0) {
      return `${value} ${unit.label}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
