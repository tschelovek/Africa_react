import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import africaReducer from "../features/Africa/africaSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    africa: africaReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
