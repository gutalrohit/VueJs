//creating custom axios instance, to handle different confogs for different parts of the application
import axios from 'axios'
const stockAxios = axios.create({
  baseURL: 'https://rohitgutal.com'
})

//Addd properties after instance is created
//stockAxios.defaults.headers.common['axiosInstance'] = 'Custom Axios Instance'

export default stockAxios;