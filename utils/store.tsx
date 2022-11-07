import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vocab {
  id: number;
  word: string;
  definition: string;
  gender: string;
  sentence: string;
}

interface VocabSliceState {
  vocabs: Vocab[];
}

const initialState: VocabSliceState = {
  vocabs: [],
};

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  reducers: {
    addVocab: (state, action: PayloadAction<Vocab>) => {
        let vocab = action.payload;
      state.vocabs = [
        ...state.vocabs,
        {
          id: state.vocabs.length,
          word: vocab.word,
          definition: vocab.definition,
          gender: vocab.gender,
          sentence: vocab.sentence,
        },
      ];
    },
    removeVocab: (state, action: PayloadAction<number>) => {
      state.vocabs = state.vocabs.filter(({ id }) => id === action.payload);
    },
  },
});

export const { addVocab, removeVocab } = vocabSlice.actions;

const store = configureStore({
  reducer: {
    vocabs: vocabSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectVocabs = (state: RootState) => state.vocabs.vocabs;

export default store;
