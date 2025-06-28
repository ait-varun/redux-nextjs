import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Crew } from './types';

// Async thunk to fetch crew for a show by showId
export const fetchCrewByShowId = createAsyncThunk<Crew[], number>(
  'crew/fetchCrewByShowId',
  async (showId) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${showId}/crew`);
    if (!res.ok) throw new Error('Failed to fetch crew');
    return res.json();
  }
);

interface CrewState {
  crew: Crew[];
  loading: boolean;
  error: string | null;
}

const initialState: CrewState = {
  crew: [],
  loading: false,
  error: null,
};

const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    clearCrew(state) {
      state.crew = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrewByShowId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCrewByShowId.fulfilled, (state, action: PayloadAction<Crew[]>) => {
        state.loading = false;
        state.crew = action.payload;
      })
      .addCase(fetchCrewByShowId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch crew';
      });
  },
});

export const { clearCrew } = crewSlice.actions;
export default crewSlice.reducer;
