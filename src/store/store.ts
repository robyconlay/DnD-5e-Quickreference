import { configureStore } from '@reduxjs/toolkit'
import descriptionModalReducer from './reducers/descriptionModal.slice'
import languageChooserModalReducer from './reducers/languageChooserModal.slice'

export const store = configureStore({
  devTools: true,
  reducer: {
    descriptionModal: descriptionModalReducer,
    languageChooserModal: languageChooserModalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch