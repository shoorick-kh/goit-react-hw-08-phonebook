import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      if (
        state.items.some(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(`${action.payload.name} is already in contacts.`);
      }
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducers = contactsSlice.reducer;

// {
//   addName: {
//     reducer(state, action) {
// if (
//   state.items.some(
//     contact =>
//       contact.name.toLowerCase() === action.payload.name.toLowerCase()
//   )
// ) {
//   return alert(`${action.payload.name} is already in contacts.`);
// }
//       return { ...state, items: [...state.items, action.payload] };
//     },
//     prepare(name, number) {
//       return {
//         payload: {
//           id: nanoid(),
//           name,
//           number,
//         },
//       };
//     },
//   },
//   deleteName(state, action) {
// return {
//   ...state,
//   items: state.items.filter(name => name.id !== action.payload),
// };
//   },
// },

// export const { addName, deleteName } = contactsSlice.actions;
