const objRenaming = (obj) => {
  let { id: userId, firstName:fullName = "Guest", email } = obj;
  console.log({ userId, fullName, email });
};

export default objRenaming;
