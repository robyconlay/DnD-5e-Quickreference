import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export default descriptionModalSlice.reducer