import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        countBlog: (state) => {
            state.count += 1;
        }
    }
})

export const { countBlog } = counterSlice.actions;

export default counterSlice.reducer;