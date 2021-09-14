import { IUser } from "../types/user"

export const getUserById = async (id: IUser["id"]): Promise<IUser> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return response.json()
}
