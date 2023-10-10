import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

 const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
   extraReducers: {
     [fetchContacts.pending]: state => {
       state.isLoading = true;
     },

     [fetchContacts.fulfilled]: (state, action) => {
       state.isLoading = false;
       state.items = action.payload;
     },
    
     [fetchContacts.rejected]: (state, action) => {
       state.error = action.payload;
       state.isLoading = false;
     },
      
    
     [addContact.pending]: state => {
       state.isLoading = true;
     },
    
     [addContact.fulfilled]: (state, action) => {
       state.items.unshift(action.payload)
       state.isLoading = false;
     },

     [addContact.rejected]: (state, action) => {
       state.error = action.payload;
       state.isLoading = false;
     },
    
    
     [deleteContact.pending]: state => {
       state.isLoading = true;
     },
    
     [deleteContact.fulfilled]: (state, action) => {
       state.items = state.items.filter(item => item.id !== action.payload.id);
       state.isLoading = false;
     },
     [deleteContact.rejected]: (state, action) => {
       state.error = action.payload;
       state.isLoading = false;
     },
   },
 });



export const contactReducer = contactSlice.reducer;