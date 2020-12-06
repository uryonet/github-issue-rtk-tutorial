import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplaySlice from 'features/issuesDisplay/issuesDisplaySlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplaySlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer