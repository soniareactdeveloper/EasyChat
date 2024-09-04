import { configureStore } from '@reduxjs/toolkit'
import UserDataSlice from './Slice/UserDataSlice'

export default configureStore({
  reducer: {
    counter: UserDataSlice,
  },
})