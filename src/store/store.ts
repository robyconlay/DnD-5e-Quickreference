import { configureStore } from '@reduxjs/toolkit'

import descriptionModalReducer from './slices/descriptionModal.slice'
import languageChooserModalReducer from './slices/languageChooserModal.slice'

export const store = configureStore({
  devTools: true,
  reducer: {
    descriptionModal: descriptionModalReducer,
    languageChooserModal: languageChooserModalReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch