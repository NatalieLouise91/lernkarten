import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vocab {
  id: number;
  word: string;
  definition: string;
  gender: string;
  sentence: string;
}

interface User {
  email: string;
}

interface UserSliceState {
  user: User;
}

const initialUserState: UserSliceState = {
  user: { email: "" },
};

interface VocabSliceState {
  vocabs: Vocab[];
}

const initialVocabState: VocabSliceState = {
  vocabs: [],
};

export const vocabSlice = createSlice({
  name: "vocab",
  initialState: initialVocabState,
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

export const userSlice = createSlice({
  name: "currentUser",
  initialState: initialUserState,
  reducers: {
    addCurrentUser: (state, action: PayloadAction<User>) => {
      let user = action.payload;
      state.user = {
        email: user.email,
      };
    },
  },
});

export const { addVocab, removeVocab } = vocabSlice.actions;
export const { addCurrentUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    vocabs: vocabSlice.reducer,
    currentUsers: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectVocabs = (state: RootState) => state.vocabs.vocabs;
export const selectCurrentUser = (state: RootState) => state.currentUsers;

export default store;
