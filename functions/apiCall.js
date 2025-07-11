const fetchData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id % 2 === 0) {
        resolve({ id: id, data: "Some data" });
      } else {
        reject("ID must be even");
      }
    }, 2000);
  });
};

export default fetchData;