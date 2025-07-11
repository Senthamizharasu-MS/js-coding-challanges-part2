const totalPrice = (data) => {
  const total =  data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  console.log(total);
};

export default totalPrice;
