import React from "react";

const BugExpiryMessage = ({ expiryDate }) => {
  const getTimeLeftMessage = (expiryDate) => {
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
    return `Expires in ${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
  };

  return <>{getTimeLeftMessage(expiryDate)}</>;
};

export default BugExpiryMessage;
