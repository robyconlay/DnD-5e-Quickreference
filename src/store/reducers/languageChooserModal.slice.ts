import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store/store'

// Define a type for the slice state
interface LanguageChooserModalState {
  visible: boolean;
  currentLang: string;
}

// Define the initial state using that type
const initialState: LanguageChooserModalState = {
  visible: false,
  currentLang: 'en'
}

export const languageChooserModalSlice = createSlice({
  name: 'languageChooserModal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModal: (state) => {
      state.visible = true
    },
    closeModal: (state) => {
      state.visible = false
    },
    selectLanguage: (state, action: PayloadAction<string>) => {
      state.currentLang = action.payload
      state.visible = false;
    }
  },
})

export const { openModal, closeModal, selectLanguage } = languageChooserModalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectShow = (state: RootState) => state.languageChooserModal.visible

export default languageChooserModalSlice.reducer