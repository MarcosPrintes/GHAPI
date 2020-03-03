import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    Authorization: 'token 692a9c8c59dc7405e6440648f975c1ba3673c5fc',
  },
});

export default class Api {
  static async getData(termo, page) {
    const result = await axiosInstance.get(`https://api.github.com/search/repositories?q=${termo}&per_page=20&page=${page}`);
    return result;
  }
}
