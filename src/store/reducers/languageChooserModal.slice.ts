import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store/store'

interface LanguageChooserModalState {
  visible: boolean;
  currentLang: string;
}

const initialState: LanguageChooserModalState = {
  visible: false,
  currentLang: 'en'
}

export const languageChooserModalSlice = createSlice({
  name: 'languageChooserModal',
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

export default languageChooserModalSlice.reducer