// response.js
const response = (statusCode, message, datas) => {
  return {
    payload: {
      status: statusCode,
      message: message,
      datas: datas,
    },
  };
};

module.exports = response;
