import {configureStore} from '@reduxjs/toolkit';
import PaneReducer from './pane/paneSlice';

const store = configureStore({
    reducer: {
        PaneReducer,
    },
});
export default store;