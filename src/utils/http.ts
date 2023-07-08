import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: '',
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
      function (error: AxiosError) {
        toast.error('message')
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
