const groupByProp = (data) => {
  const group = data.reduce((accumulator, currentValue) => {
    const type = currentValue.type;
    if (!accumulator[type]) {
      accumulator[type] = [];
    }
    accumulator[type].push(currentValue);
    return accumulator;
  }, {});

  console.log(group);
};

export default groupByProp;
