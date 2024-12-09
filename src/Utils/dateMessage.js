export const getTimeLeftMessage = (expiryDate) => {
  const now = new Date(); // Current date
  const expiry = new Date(expiryDate); // Convert expiry_date string to Date
  const diffInMs = expiry - now; // Difference in milliseconds

  if (diffInMs <= 0) {
    return "Expired"; // If the expiry date has passed
  }

  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert to days

  if (diffInDays < 7) {
    return `Expires in ${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `Expires in ${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""}`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `Expires in ${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
  }

  const diffInYears = Math.floor(diffInDays / 12);
  return `Expires in ${diffInYears} year${diffInYears > 1 ? "s" : ""}`;
};

export const getTimeAgoMessage = (timestamp) => {
  const now = new Date(); // Current date
  const time = new Date(timestamp); // Convert timestamp string to Date
  const diffInMs = now - time; // Difference in milliseconds

  if (diffInMs < 60 * 1000) {
    // Less than 1 minute
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  if (diffInMinutes < 60) {
    // Less than 1 hour
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    // Less than 1 day
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    // Less than 1 week
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    // Less than 1 month
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    // Less than 1 year
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
};
