import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AnimalState {
//     value: Animal[]
// }

interface Animal {
    name: string
    specie: string
    imgSrc: string
}
const getInitialState = ():Animal[] => {
  const savedTasks = localStorage.getItem('animals');
  if (!savedTasks) {
    return [];
  }
  return JSON.parse(savedTasks);
};

// const initialState:AnimalState = {
//   value: [],
// };

export const reservationsSlice = createSlice({
  name: 'animals',
  initialState: getInitialState(),
  reducers: {
    addAnimal: (state, action: PayloadAction<Animal>) => ([...state, action.payload]),
  },
});

export const { addAnimal } = reservationsSlice.actions;

export default reservationsSlice.reducer;
