import axios, { AxiosError } from 'axios'
import { store } from '../store'

import Endpoints from './endpoints'

export const axiosInstance = axios.create({})