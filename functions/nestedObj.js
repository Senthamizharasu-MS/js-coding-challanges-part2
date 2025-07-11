const nestedObj = ({
  user: {
    name,
    address: { street, city },
  },
}) => {
  console.log(name, street, city);
};


