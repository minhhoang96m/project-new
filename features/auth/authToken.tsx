import axios from "axios"
import { auth } from "~/config/firebase.ts"

const instance = axios.create({
  baseURL: "https://project-new-cc882.firebaseapp.com",
})

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const user = auth.currentUser
        if (user) {
          const token = await user.getIdToken()
          localStorage.setItem("token", token)
          originalRequest.headers.Authorization = `Bearer ${token}`
          return axios(originalRequest)
        }
      } catch (error) {
        // Handle error
        window.location.href = "/login"
      }
    }
    return Promise.reject(error)
  }
)

export default instance
