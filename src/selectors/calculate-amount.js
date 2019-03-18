export const calculateTotalExpenditure = array => {
  return (
    array !== undefined &&
    array
      .map(amount => {
        return Math.abs(amount.amount.value);
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
};
