import { ApiContext } from "@/types/data"
import { fetcher } from "@/utils"

export type GetUserParams = {
  id: number
}

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
) => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/user/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
  )
}

export default getUser;
