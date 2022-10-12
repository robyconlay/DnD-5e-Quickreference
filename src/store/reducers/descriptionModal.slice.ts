import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store/store'
import { ItemData } from '@interfaces/ItemData';

interface DescriptionModalState {
  visible: boolean;
  data: ItemData;
}

const initialState: DescriptionModalState = {
  visible: false,
  data: {
    title: "",
    icon: "",
    subtitle: "",
    description: "",
    reference: "",
    bullets: []
  }
}

export const descriptionModalSlice = createSlice({
  name: 'descriptionModal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ItemData>) => {
      state.visible = true
      state.data = action.payload
    },
    closeModal: (state) => {
      state.visible = false
      state.data = initialState.data
    }
  },
})

export const { openModal, closeModal } = descriptionModalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectShow = (state: RootState) => state.descriptionModal.visible

export default descriptionModalSlice.reducer