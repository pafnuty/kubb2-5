export const orderStatus = {
  placed: 'placed',
  approved: 'approved',
  delivered: 'delivered',
} as const
export type OrderStatus = (typeof orderStatus)[keyof typeof orderStatus]
export type Order = {
  /**
   * @type integer | undefined int64
   * @example 10
   */
  id?: number
  /**
   * @type integer | undefined int64
   * @example 198772
   */
  petId?: number
  /**
   * @type integer | undefined int32
   * @example 7
   */
  quantity?: number
  /**
   * @type string | undefined date-time
   */
  shipDate?: string
  /**
   * @description Order Status
   * @type string | undefined
   * @example approved
   */
  status?: OrderStatus
  /**
   * @type boolean | undefined
   */
  complete?: boolean
}
