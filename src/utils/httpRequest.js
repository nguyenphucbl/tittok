import axios from 'axios'
console.log(import.meta)
const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_API,
})

httpRequest.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err),
)

export const get = async (path, options = {}) => {
  const res = await httpRequest.get(path, options)
  return res.data
}

export default httpRequest
