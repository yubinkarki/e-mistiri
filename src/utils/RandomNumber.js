export default getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
