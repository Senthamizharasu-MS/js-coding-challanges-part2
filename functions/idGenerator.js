const idGenerator = (limit, i=1) => {
  let arr = [];
  let value = 0;
  while (value <= limit) {
    arr.push(value);
    value = value + i;
  }
  console.log(arr);
};
export default idGenerator;
