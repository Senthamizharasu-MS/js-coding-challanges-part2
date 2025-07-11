const arrCheck = (arr) => {
  console.log(arr.some((i) => i > 5));
  console.log(arr.every((i) => i % 2 == 0));
};

export default arrCheck;
