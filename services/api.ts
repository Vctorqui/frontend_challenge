import axios from 'axios'
import { Comment } from '@/types/comment'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const apiBase = axios.create({
  baseURL: API_URL,
})

export const getCommnets = async (): Promise<Comment[]> => {
  const response = await apiBase.get('/comments')
  return response.data
}
