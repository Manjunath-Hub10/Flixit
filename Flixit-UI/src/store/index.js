import {
    configureStore,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";

  import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
  import axios from "axios";

  const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
  };

  const FlixitSlice = createSlice(
    {
        name: "Flixit",
        initialState,
        extraReducers: (builder) => {},
    });

    export const store = configureStore({
        reducer: {
            flixit: FlixitSlice.reducer,
        },
    })

