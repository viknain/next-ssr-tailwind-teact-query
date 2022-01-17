import { PayloadAction } from '@reduxjs/toolkit'
import { ERROR_MESSAGE, SHOW_LOADING, SUCCESS } from '../types/common-types'

const initialState = {
  loading: false,
  success: false,
  error: false
}

export default function commonReducer(state = initialState, { type, payload }: PayloadAction): any {
  switch (type) {
    case SHOW_LOADING: {
      return { ...state, loading: payload }
    }
    case SUCCESS: {
      return { ...state, success: payload }
    }
    case ERROR_MESSAGE: {
      return { ...state, error: true, message: payload }
    }
    default:
      return state
  }
}
