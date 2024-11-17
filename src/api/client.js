import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {"Content-Type": "application/json"},
});

// request intercepter
client.interceptors.request.use(
  (config) => {
    const sessionId = localStorage.getItem('session_id');
    if(sessionId) {
      config.headers['Authorization'] = `Bearer ${sessionId}`; //authorization 헤더에 세션아이디 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

// response intercepter
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response && error.response.status === 401) {
      alert('로그아웃 되셨습니다.');
      window.location.href = '/'; // 이 방법이 안되면 navigate
    }
    return Promise.reject(error);
  }
);

export default client;