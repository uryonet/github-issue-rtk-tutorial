import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplaySlice from 'features/issuesDisplay/issuesDisplaySlice'
import repoDetailsSlice from 'features/repoSearch/RepoDetailsSlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplaySlice,
  repoDetails: repoDetailsSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer