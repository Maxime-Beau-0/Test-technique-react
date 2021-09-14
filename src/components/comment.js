export const Comment = (props) => {
  const { content, userMail } = props

  return (
    <div className="hover:shadow select-none cursor-pointer flex flex-1 flex-col items-left p-4">
      <div className="flex-1">
        <div>{content}</div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="text-gray-600 dark:text-gray-200 text-xs">
          {`Posted by ${userMail}`}
        </div>
      </div>
    </div>
  )
}
