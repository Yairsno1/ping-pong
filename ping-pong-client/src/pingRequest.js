import axios from 'axios';

// export default (responseHandler) => {
//   setTimeout(
//     () => {
//       responseHandler("pong!");
//     },
//     500);
// };

export default (responseHandler, errorHandler) => {
  axios.get('/api/v1/ping')
    .then(function (response) {
      // handle success
      responseHandler(response.data["pong"]);
    })
    .catch(function (error) {
      errorHandler();
    })
    .finally(function () {
      // always executed
      //NOP
    });
};
