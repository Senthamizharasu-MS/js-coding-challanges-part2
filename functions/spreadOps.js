const spreadOps = (data) => {
  console.log(data);

  const obj = { ...data };

  obj.a = 10;

  console.log("After modifying 'a' in data:", data);
  console.log("After modifying 'a' in obj:", obj);

  obj.b.c = 20;

  console.log("After modifying 'c' in data:", data);
  console.log("After modifying 'c' in obj:", obj);
};

export default spreadOps;
