import { createSlice } from "@reduxjs/toolkit";



export const searchSlice = createSlice({

    name: 'searchParams',
    initialState: { value: { queryParam: '', cuisine: '' } },
    reducers: {
        updateSearch: (state, action) => {
            state.value = action.payload;


        },
    },
})
export default searchSlice.reducer;