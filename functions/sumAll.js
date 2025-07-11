const sumAll = (...num) => {
  console.log(num);

  console.log(num.reduce((sum, i) => sum + i, 0));
};

export default sumAll
