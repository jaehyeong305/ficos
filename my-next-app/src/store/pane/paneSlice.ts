import {createSlice} from '@reduxjs/toolkit';

const paneSlice = createSlice({
    name: 'pane',
    initialState: false,
    reducers: {
        openPane: () => true,
        closePane: () => false,
    },
});
export const {openPane, closePane} = paneSlice.actions;
export default paneSlice.reducer;