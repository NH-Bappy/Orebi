import { createSlice } from '@reduxjs/toolkit'

export const Breadcrumbe = createSlice({
  name: 'Breadcrumbe',
  initialState: {
    BeforepreviousValue:"",
    previousValue:"",
    currentValue:"",
  },
  reducers: {
    bread: (state,action) => {
        state.BeforepreviousValue=state.previousValue
        state.previousValue=state.currentValue
        state.currentValue=action.payload

    },

  },
})

// Action creators are generated for each case reducer function
export const { bread } = Breadcrumbe.actions

export default Breadcrumbe.reducer