import { createSlice } from '@reduxjs/toolkit';

export const paginasSlice = createSlice({
   name: 'paginas',
   initialState: {
   pagina: 'Home',
   },
   reducers: {
      selectPagina: (state, action) => {
         state.pagina = action.payload;
      },
   },
})

export const { selectPagina } = paginasSlice.actions