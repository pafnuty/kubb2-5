import { useMutation } from '@tanstack/react-query'

import client from '@kubb/swagger-client/client'

import type { UseMutationOptions } from '@tanstack/react-query'
import type { CreatePetsBreedRequest, CreatePetsBreedResponse, CreatePetsBreedPathParams } from '../models/CreatePetsBreed'

/**
 * @summary Create a pet breed
 * @link /pets/${breed}
 * @deprecated
 */
export function useCreatePetsBreed<TData = CreatePetsBreedResponse, TVariables = CreatePetsBreedRequest>(
  breed: CreatePetsBreedPathParams['breed'],
  options?: {
    mutation?: UseMutationOptions<TData, unknown, TVariables>
  }
) {
  const { mutation: mutationOptions } = options ?? {}

  return useMutation<TData, unknown, TVariables>({
    mutationFn: (data) => {
      return client<TData, TVariables>({
        method: 'post',
        url: `/pets/$${breed}`,
        data,
      })
    },
    ...mutationOptions,
  })
}
