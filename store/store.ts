import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['common']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: any = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware] as const
})

export const persistor = persistStore(store)

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof persistedReducer>
