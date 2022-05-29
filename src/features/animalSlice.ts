import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Animal {
    name: string
    specie: string
    imgSrc: string
}
const getInitialState = ():Animal[] => {
  const savedAnimals = localStorage.getItem('animals');
  if (!savedAnimals) {
    return [];
  }
  return JSON.parse(savedAnimals);
};

export const reservationsSlice = createSlice({
  name: 'animals',
  initialState: getInitialState(),
  reducers: {
    addAnimal: (state, action: PayloadAction<Animal>) => ([...state, action.payload]),
  },
});

export const { addAnimal } = reservationsSlice.actions;

export default reservationsSlice.reducer;
