const createMember = ({ email, address = {} }) => {
  const validEmail = /.+\@.+\..+/.test(email);
  if (!validEmail) {
    throw new Error("Invalid Email");
  }
  return {
    email,
    address: address ? address : null,
  };
};

const member = createMember({ email: "my@myemail.com" });
console.log(member);
