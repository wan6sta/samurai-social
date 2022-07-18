import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {fetchUsers, fetchUsersResponse, IUser} from "../../models/models";



export const samuraiApi = createApi({
  reducerPath: 'samurai/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0'
  }),
  endpoints: build => ({
    searchUsers: build.query<fetchUsersResponse<IUser>, fetchUsers>({
      query: (search: fetchUsers) => ({
        url: `/users`,
        params: {
          count: search.count,
          page: search.page,
          term: search.term
        }
      })
    }),
    searchUser: build.query<fetchUsersResponse<IUser>, fetchUsers>({
      query: (search: fetchUsers) => ({
        url: `/users`,
        params: {
          count: search.count,
          page: search.page,
          term: search.term
        }
      })
    })
  })
})

export const {useLazySearchUsersQuery, useLazySearchUserQuery} = samuraiApi