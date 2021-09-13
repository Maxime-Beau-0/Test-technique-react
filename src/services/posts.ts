import { IPost } from "../types/post"

export const getPosts = async (): Promise<IPost[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  return response.json()
}
