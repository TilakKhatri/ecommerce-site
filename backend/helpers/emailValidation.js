const emailValidate = require("deep-email-validator");

const validateLegitEmail = async (emailAddress) => {
  console.log("email", emailAddress);
  console.log(emailValidate.validate(emailAddress));
  return await emailValidate.validate(emailAddress);
};

module.exports = { validateLegitEmail };
