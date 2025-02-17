import client from '@kubb/swagger-client/client'
import { createQuery } from '@tanstack/solid-query'
import type { LogoutUserQueryResponse } from '../models/LogoutUser'
import type { CreateBaseQueryOptions, CreateQueryResult, QueryKey, WithRequired } from '@tanstack/solid-query'

type LogoutUserClient = typeof client<LogoutUserQueryResponse, never, never>
type LogoutUser = {
  data: LogoutUserQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: LogoutUserQueryResponse
  client: {
    parameters: Partial<Parameters<LogoutUserClient>[0]>
    return: Awaited<ReturnType<LogoutUserClient>>
  }
}
export const logoutUserQueryKey = () => [{ url: '/user/logout' }] as const
export type LogoutUserQueryKey = ReturnType<typeof logoutUserQueryKey>
export function logoutUserQueryOptions<TData = LogoutUser['response'], TQueryData = LogoutUser['response']>(
  options: LogoutUser['client']['parameters'] = {},
): WithRequired<CreateBaseQueryOptions<LogoutUser['response'], LogoutUser['error'], TData, TQueryData>, 'queryKey'> {
  const queryKey = logoutUserQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<LogoutUser['data'], LogoutUser['error']>({
        method: 'get',
        url: `/user/logout`,
        ...options,
      })
      return res.data
    },
  }
}
/**
 * @summary Logs out current logged in user session
 * @link /user/logout */
export function logoutUserQuery<TData = LogoutUser['response'], TQueryData = LogoutUser['response'], TQueryKey extends QueryKey = LogoutUserQueryKey>(
  options: {
    query?: Partial<CreateBaseQueryOptions<LogoutUser['response'], LogoutUser['error'], TData, TQueryData, TQueryKey>>
    client?: LogoutUser['client']['parameters']
  } = {},
): CreateQueryResult<TData, LogoutUser['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? logoutUserQueryKey()
  const query = createQuery<LogoutUser['data'], LogoutUser['error'], TData, any>({
    ...logoutUserQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as CreateQueryResult<TData, LogoutUser['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
