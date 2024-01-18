/**
 * Formats a given date into a string representation.
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {

  if (date == "Invalid Date") {
    return null;
  }

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  const dateString = new Date(date).toLocaleDateString("fr-FR", options)

  return dateString;
}
