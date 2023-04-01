import { configureStore } from "@reduxjs/toolkit";
import { paginasSlice } from "./slices/paginas";

export const store = configureStore({
    reducer: {
        paginas: paginasSlice.reducer,
    },
})