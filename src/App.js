import { UserCard } from "./components/userCard"
import { Post } from "./components/post"
import { Comment } from "./components/comment"

export default function App() {
  return (
    <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul class="flex flex-col divide divide-y w-full">
        <li class="flex flex-row">
          <Post title="TestTitle" content="testContent" />
        </li>
        <li class="flex flex-row">
          <Comment content="testContent" userMail="maxime.beau@live.fr" />
        </li>
        <li class="flex flex-row">
          <UserCard
            name="Maxime Beau"
            city="Montpellier"
            email="maxime.beau@live.fr"
          />
        </li>
      </ul>
    </div>
  )
}
