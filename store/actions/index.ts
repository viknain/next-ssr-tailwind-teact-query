import { ERROR_MESSAGE, SHOW_LOADING, SUCCESS } from '../types/common-types'

export const apiLoading = (loading: boolean) => ({
  type: SHOW_LOADING,
  payload: loading
})
export const apiSuccess = (success: boolean) => ({
  type: SUCCESS,
  payload: success
})
export const apiError = (message: string) => ({
  type: ERROR_MESSAGE,
  payload: message
})
