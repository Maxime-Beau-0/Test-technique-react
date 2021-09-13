import { Post } from "./components/post"

export default function App() {
  return (
    <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul class="flex flex-col divide divide-y w-full">
        <li class="flex flex-row">
          <Post title="TestTitle" content="testContent" time={new Date()} />
        </li>
        <li class="flex flex-row">
          <Post title="Title 2" content="testContent" time={new Date()} />
        </li>
        <li class="flex flex-row">
          <Post
            title="Title 3"
            content="testContent bla bla bla bla bla"
            time={new Date()}
          />
        </li>
      </ul>
    </div>
  )
}
