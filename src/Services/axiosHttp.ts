import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: 'https://api.instantwebtools.net',
  timeout: 1000000,
})
export default instanceAxios
