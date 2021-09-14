import { useState, useEffect } from "react"

import { Post } from "./components/post"

import { getPosts } from "./services/posts"
import { IPost } from "./types/post"

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col divide divide-y w-full">
        {posts.slice(0, 25).map((post: IPost) => (
          <li key={post.id} className="flex flex-row">
            <Post
              id={post.id}
              userId={post.userId}
              title={post.title}
              content={post.body}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
