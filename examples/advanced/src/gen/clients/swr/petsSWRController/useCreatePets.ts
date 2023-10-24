import useSWRMutation from 'swr/mutation'

import client from '../../../../swr-client.ts'

import type { SWRMutationConfiguration, SWRMutationResponse } from 'swr/mutation'
import type { ResponseConfig } from '../../../../swr-client.ts'
import type {
  CreatePets201,
  CreatePetsHeaderParams,
  CreatePetsMutationRequest,
  CreatePetsMutationResponse,
  CreatePetsPathParams,
  CreatePetsQueryParams,
} from '../../../models/ts/petsController/CreatePets'

/**
 * @summary Create a pet
 * @link /pets/:uuid
 */

export function useCreatePets<
  TData = CreatePetsMutationResponse,
  TError = CreatePets201,
  TVariables = CreatePetsMutationRequest,
>(
  uuid: CreatePetsPathParams['uuid'],
  params?: CreatePetsQueryParams,
  headers?: CreatePetsHeaderParams,
  options?: {
    mutation?: SWRMutationConfiguration<ResponseConfig<TData>, TError, string | null, TVariables>
    client?: Partial<Parameters<typeof client<TData, TError, TVariables>>[0]>
    shouldFetch?: boolean
  },
): SWRMutationResponse<ResponseConfig<TData>, TError, string | null, TVariables> {
  const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {}

  const url = shouldFetch ? `/pets/${uuid}` : null
  return useSWRMutation<ResponseConfig<TData>, TError, string | null, TVariables>(
    url,
    (url, { arg: data }) => {
      return client<TData, TError, TVariables>({
        method: 'post',
        url,
        data,
        params,
        headers: { ...headers, ...clientOptions.headers },
        ...clientOptions,
      })
    },
    mutationOptions,
  )
}
