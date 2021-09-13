import { useState, useEffect, FC } from "react"

import { Post } from "./components/post"

import { getPosts } from "./services/posts"
import { IPost } from "./types/post"

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts))
  })

  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col divide divide-y w-full">
        {posts.map((post: IPost) => (
          <li className="flex flex-row">
            <Post title={post.title} content={post.body} />
          </li>
        ))}
      </ul>
    </div>
  )
}
