export const formatDate = (date) => {

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  // TODO gérer Invalid Date
  const dateString = new Date(date).toLocaleDateString("fr-FR", options)

  return dateString;
}
