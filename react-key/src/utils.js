export const getColor = (count) => {
  const colors = ['orange', 'green', 'yellow'];

  return colors[count % colors.length];
};
