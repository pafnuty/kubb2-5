import { faker } from '@faker-js/faker'
import { createUser } from '../createUser'
import type { UpdateUserError, UpdateUserMutationRequest, UpdateUserMutationResponse, UpdateUserPathParams } from '../../models/UpdateUser'

/**
 * @description successful operation
 */

export function createUpdateUserError(override?: NonNullable<Partial<UpdateUserError>>): NonNullable<UpdateUserError> {
  faker.seed([220])
  return undefined
}

export function createUpdateUserMutationResponse(override?: NonNullable<Partial<UpdateUserMutationResponse>>): NonNullable<UpdateUserMutationResponse> {
  faker.seed([220])
  return undefined
}

export function createUpdateUserPathParams(override: NonNullable<Partial<UpdateUserPathParams>> = {}): NonNullable<UpdateUserPathParams> {
  faker.seed([220])
  return {
    ...{ 'username': faker.string.alpha() },
    ...override,
  }
}
/**
 * @description Update an existent user in the store
 */

export function createUpdateUserMutationRequest(override?: NonNullable<Partial<UpdateUserMutationRequest>>): NonNullable<UpdateUserMutationRequest> {
  faker.seed([220])
  return createUser(override)
}
