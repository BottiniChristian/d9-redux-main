import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice'
import jobsReducer from './jobsReducer'

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    jobs: jobsReducer,
  },
})

export default store
