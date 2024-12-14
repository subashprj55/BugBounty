export const filterData = (data, deadlineValue, selectedSeverities) => {
  const currentDate = new Date();

  return data.filter((item) => {
    const expiryDate = new Date(item.expiry_date);

    // Severity Filter
    const matchesSeverity =
      selectedSeverities.length === 0 ||
      selectedSeverities.includes(item.severity);

    // Deadline Filter
    let matchesDeadline = false;
    switch (deadlineValue) {
      case "All":
        matchesDeadline = true;
        break;
      case "Expiring Soon":
        matchesDeadline =
          (expiryDate - currentDate) / (1000 * 60 * 60 * 24) <= 3;
        break;
      case "Less than 7 Days":
        matchesDeadline =
          (expiryDate - currentDate) / (1000 * 60 * 60 * 24) <= 7;
        break;
      case "Less than 30 Days":
        matchesDeadline =
          (expiryDate - currentDate) / (1000 * 60 * 60 * 24) <= 30;
        break;
      default:
        matchesDeadline = true;
    }

    return matchesSeverity && matchesDeadline;
  });
};
