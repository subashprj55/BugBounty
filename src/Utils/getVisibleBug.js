export const getVisibleBugs = (authorEmail, bugs, userEmail) => {
  // If the user is the bounty creator, show all bugs
  if (authorEmail === userEmail) {
    return bugs;
  }
  // Otherwise, check if the user is one of the bug submitters
  const visibleBug = bugs.filter((bug) => bug.submitted_by.email === userEmail);
  // If a match is found, return the single bug as an array
  if (visibleBug) {
    return visibleBug;
  }

  // If no match, return an empty array
  return [];
};
