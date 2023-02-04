export default CapitalizeFirstLetter = sentence => {
  const word = sentence?.trim().split(' ');

  const modifiedWord = word?.map(
    item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(),
  );

  return modifiedWord?.join(' ');
};
