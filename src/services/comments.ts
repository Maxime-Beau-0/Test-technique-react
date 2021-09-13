import { IComment } from "../types/comment"

export const getCommentsByPostId = async (
  id: IComment["postId"]
): Promise<IComment[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  )
  return response.json()
}
