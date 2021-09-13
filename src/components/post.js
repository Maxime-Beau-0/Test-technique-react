import { useEffect, useState } from "react"

import { Comment } from "../components/comment"
import { getCommentsByPostId } from "../services/comments"

export const Post = (props) => {
  const { id, title, content } = props
  const [comments, setComments] = useState([])
  const [displayComments, setDisplayComments] = useState(false)

  useEffect(() => {
    getCommentsByPostId(id).then(setComments)
  }, [id])

  return (
    <div class="hover:shadow flex flex-1 items-center p-4">
      <div class="flex-1 pl-1">
        <div class="font-medium dark:text-white text-2xl">{title}</div>
        <div class="text-gray-600 dark:text-gray-200 text-sm">{content}</div>
        <div
          onClick={() => setDisplayComments(!displayComments)}
          class="select-none cursor-pointer text-gray-300 dark: text-gray-100 text-sm"
        >
          Display {comments.length} comments
        </div>

        {displayComments && (
          <ul className="flex flex-col divide divide-y w-full">
            {comments.map((comment) => (
              <li className="flex flex-row">
                <Comment
                  key={comment.id}
                  id={comment.id}
                  content={comment.body}
                  userMail={comment.email}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
