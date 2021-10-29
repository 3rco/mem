import httpStatus from 'http-status';
import axios from 'axios';

export const getAll = async (req, res, next) => {
  try {
    axios.get('https://api.radioparadise.com/api/now_playing')
  .then(function (response) {
    // handle success
    console.log("succcc",response);
  })
  .catch(function (error) {
    // handle error
    console.log("err",error);
  });
    res.status(httpStatus.OK);
    res.send({ message: 'OK', response });
  } catch (error) {
    return next(error);
  }
};
