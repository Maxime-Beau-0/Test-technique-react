import { dateFormatter } from "../utils/dateFormatter"

export const Post = (props) => {
  const { title, content } = props

  return (
    <div class="hover:shadow select-none cursor-pointer flex flex-1 items-center p-4">
      <div class="flex-1 pl-1 mr-16">
        <div class="font-medium dark:text-white text-2xl">{title}</div>
        <div class="text-gray-600 dark:text-gray-200 text-sm">{content}</div>
      </div>
      <div class="text-gray-600 dark:text-gray-200 text-xs">
        {dateFormatter.format(new Date() - 60 * 1000000)}
      </div>
    </div>
  )
}
