export const UserCard = (props) => {
  const { name, city, email } = props

  return (
    <div className="flex flex-1 p-4 shadow-lg rounded-2xl w-40 justify-center bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
          {name}
        </p>
        <p className="text-gray-400 text-xs mb-4">{city}</p>
        <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
          {email}
        </p>
      </div>
    </div>
  )
}
