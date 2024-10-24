import axios from 'axios'

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

request.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err),
)

export const get = async (path, options = {}) => {
  const res = await request.get(path, options)
  return res.data
}

export default request
