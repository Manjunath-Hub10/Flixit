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

  export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const {
      data: { genres },
    } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    //   console.log(data);
    return genres;
  });

  const FlixitSlice = createSlice(
    {
        name: "Netflix",
        initialState,
        extraReducers: (builder) => {
            builder.addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.playload;
                state.genresLoaded = true;
            });
        },
    });

    export const store = configureStore({
        reducer: {
            flixit: FlixitSlice.reducer,
        },
    })

    export const fetchMovies = createAsyncThunk(
        "netflix/trending",
        async ({ type }, thunkApi) => {
          const {
            netflix: { genres },
          } = thunkApi.getState();
          return getRowData(
            `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
            genres,
            true
          );
          // console.log(data); //TESTED
        }
    );

      const getRowData = async (api, genres, paging) => {
        const moviesArray = [];
      
        for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
          const {
            data: { results },
          } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
          createArrayFromRowData(results, moviesArray, genres);
        }
        return moviesArray;
      };


      const createArrayFromRowData = (array, movieArray, genres) => {
        // console.log(array); //TESTED
        array.forEach((movie) => {
            const movieGenres = [];
            movie.genre_ids.forEach((genre) => {
                const name = genres.find(({ id }) => id === genre);
                if (name) movieGenres.push(name.name);
            });
            if (movie.backdrop_path){
                moviesArray.push({
                    id: movie.id,
                    name: movie?.oiginal_name ? movie.oiginal_name : movie.original_title,
                    image: movie.backdrop_path,
                    genres: movieGenres.slice(0, 3),
                });
            }
        });
      };