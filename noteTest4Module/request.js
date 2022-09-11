const encrypt = () => {
  return "encrypted data";
};

const send = (url, data) => {
  const encryptData = encrypt(data);
  console.log(`Sending ${encryptData} to ${url}`);
};

module.exports = {
  send,
};
