import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        addtoCart: (state) => {
state.value +=1
        }
    }

})

export const {addtoCart } = counterSlice.actions;
export default counterSlice.reducer

