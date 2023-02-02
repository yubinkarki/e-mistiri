export default WaitTimeout = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
