import { createOrder } from '../createOrder'
import type { PlaceOrder200, PlaceOrder405, PlaceOrderMutationRequest, PlaceOrderMutationResponse } from '../../models/PlaceOrder'

/**
 * @description Invalid input
 */

export function createPlaceOrder405(override?: NonNullable<Partial<PlaceOrder405>>): NonNullable<PlaceOrder405> {
  return undefined
}
/**
 * @description successful operation
 */

export function createPlaceOrder200(override?: NonNullable<Partial<PlaceOrder200>>): NonNullable<PlaceOrder200> {
  return createOrder(override)
}

export function createPlaceOrderMutationRequest(override?: NonNullable<Partial<PlaceOrderMutationRequest>>): NonNullable<PlaceOrderMutationRequest> {
  return createOrder(override)
}
/**
 * @description successful operation
 */

export function createPlaceOrderMutationResponse(override?: NonNullable<Partial<PlaceOrderMutationResponse>>): NonNullable<PlaceOrderMutationResponse> {
  return createOrder(override)
}
