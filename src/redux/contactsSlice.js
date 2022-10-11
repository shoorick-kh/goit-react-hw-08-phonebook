import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialNamesState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

const initialNamesState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialNamesState,
  reducers: {
    addName: {
      reducer(state, action) {
        if (
          state.contacts.some(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          return alert(`${action.payload.name} is already in contacts.`);
        }
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteName(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(name => name.id !== action.payload),
      };
    },
    filterName(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addName, deleteName, filterName } = contactsSlice.actions;
export const contactsReducers = contactsSlice.reducer;
