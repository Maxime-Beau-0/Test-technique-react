import { useEffect, useState } from "react"
import styled from "styled-components"

import { Comment } from "../components/comment"
import { UserCard } from "../components/userCard"

import { getCommentsByPostId } from "../services/comments"
import { getUserById } from "../services/user"

// Add Css to display user's card when hovering on user's email
const StyledUserMail = styled.div`
  > .display-on-hover {
    display: none;
  }
  :hover > .display-on-hover {
    display: block;
  }
`

export const Post = (props) => {
  const { id, userId, title, content } = props
  const [comments, setComments] = useState([])
  const [displayComments, setDisplayComments] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getCommentsByPostId(id).then(setComments)
  }, [id])

  useEffect(() => getUserById(userId).then(setUser), [userId])

  return (
    <div className="hover:shadow flex flex-1 items-center p-4">
      <div className="flex-1 pl-1">
        <div className="font-medium dark:text-white text-2xl">{title}</div>
        {user && (
          <StyledUserMail className="text-gray-600 dark:text-gray-200 text-xs">
            {`Posted by ${user.email}`}
            <div className="display-on-hover absolute">
              {user && (
                <UserCard
                  name={user.username}
                  city={user.address.city}
                  email={user.email}
                />
              )}
            </div>
          </StyledUserMail>
        )}
        <div className="text-gray-600 dark:text-gray-200 text-sm">
          {content}
        </div>
        <div
          onClick={() => setDisplayComments(!displayComments)}
          className="select-none cursor-pointer hover:text-gray-600 text-gray-300 dark: text-gray-100 text-sm"
        >
          {`${displayComments ? "Hide" : "Display"} ${
            comments.length
          } comments`}
        </div>

        {displayComments && (
          <ul className="flex flex-col divide divide-y w-full">
            {comments.map((comment) => (
              <li key={comment.id} className="flex flex-row">
                <Comment
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
