const displayUserInfo = ({ name, age, city = "Unknown" }) => {
  console.log(`${name} is ${age} years old and from ${city} city`);
};

export default displayUserInfo