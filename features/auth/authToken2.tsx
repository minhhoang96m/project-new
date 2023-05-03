import axios from 'axios';

import { auth } from "~/config/firebase.ts";



const API_BASE_URL = "https://project-new-cc882.firebaseapp.com"

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser
    if (user) {
      const token = await user.getIdToken();
      const decodedToken = await user.getIdTokenResult();
      const decodedTokenTime = Number(decodedToken?.expirationTime)
      const currentTime = Date.now() / 1000;
      if (decodedTokenTime < currentTime) {
        // Token đã hết hạn, thực hiện refresh token
        try {
          const response = await axios.post(`${API_BASE_URL}/refresh-token`, {
            refreshToken: localStorage.getItem('refreshToken'),
          });
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          config.headers['Authorization'] = `Bearer ${response.data.token}`;
        } catch (err) {
          // Xử lý lỗi
          console.error(err);
          throw err;
        }
      } else {
        // Token chưa hết hạn, sử dụng token hiện tại
        config.headers['Authorization'] = `Bearer ${token}`;
      }


    }
    return config;
  },
  (error) => {
    // Xử lý lỗi
    console.error(error);
    return Promise.reject(error);
  }
);

// const TokenRefresh: React.FC = () => {
//   const user = auth.currentUser

//   useEffect(() => {
//     const rfToken = async () => {
//       try {
//         if (user) {
//           const decodedToken = await user.getIdTokenResult();
//           const decodedTokenTime = Number(decodedToken?.expirationTime)
//           const currentTime = Date.now() / 1000;
//           if (decodedTokenTime < currentTime) {
//             // Token đã hết hạn, thực hiện refresh token
//             auth.currentUser?.getIdToken(/* forceRefresh */ true);
//           }
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     if (user) {
//       rfToken()
//     }
//   }, [user])

//   return null;
// };

export { api };

