import type { Pet } from './Pet'

/**
 * @description Invalid input
 */
export type AddPet405 = any | null

/**
 * @description Successful operation
 */
export type AddPet200 = Pet

/**
 * @description Create a new pet in the store
 */
export type AddPetMutationRequest = Pet

/**
 * @description Successful operation
 */
export type AddPetMutationResponse = Pet
export type AddPetMutation = {
  Response: AddPetMutationResponse
  Request: AddPetMutationRequest
  Errors: AddPet405
}
