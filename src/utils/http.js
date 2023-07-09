import axios from 'axios'
import { toast } from 'react-toastify'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:1337/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      function (error) {
        toast.error('message')
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
