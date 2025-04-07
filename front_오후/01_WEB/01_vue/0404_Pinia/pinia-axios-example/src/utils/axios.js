import axios from 'axios';

//axios 공통 인스턴스 생성

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
});

export default apiClient;
