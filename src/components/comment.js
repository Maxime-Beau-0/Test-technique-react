import { dateFormatter } from "../utils/dateFormatter"

export const Comment = (props) => {
  const { content, userMail } = props

  return (
    <div class="hover:shadow select-none cursor-pointer flex flex-1 flex-col items-left p-4">
      <div class="flex-1">
        <div>{content}</div>
      </div>
      <div class="flex flex-row space-x-2">
        <div class="text-gray-600 dark:text-gray-200 text-xs">
          {`${dateFormatter.format(new Date() - 60 * 13 * 1000)} - ${userMail}`}
        </div>
      </div>
    </div>
  )
}
