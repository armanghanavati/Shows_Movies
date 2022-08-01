import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/api/MovieApi";

const ApiKey = "53c800d"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies" , async(term)=>{
    const response = await MovieApi.get(
        `?apiKey=${ApiKey}&s=${term}&type=movie`
        );
        return response.data
    })
    
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows" , async(term)=>{
    const response = await MovieApi.get(
        `?apiKey=${ApiKey}&s=${term}&type=series`
    );
    return response.data
})

export const fetchAsyncMovieDetailes = createAsyncThunk( 'movies/fetchAsyncMovieDetailes' ,async(id)=>{ 
    const response = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`)
    return response.data
 } )

const initialState = {
    movies:{},
    shows:{},
    selectedMovieOrShows:{}
}

const MovieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeFetchMovieDetaies:(state)=>{
            state.selectedMovieOrShows={}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.fulfilled]:(state , {payload})=>{
            return {...state , movies: payload}
        },
        [fetchAsyncShows.fulfilled]:(state , {payload})=>{
                return {...state , shows: payload}
        },
        [fetchAsyncMovieDetailes.fulfilled]:(state , {payload})=>{
                return {...state , selectedMovieOrShows: payload}
        },
    }
    
})

export const {removeFetchMovieDetaies} = MovieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export const getAllShows = (state)=>state.movies.shows;
export const getAllDetailes = (state)=>state.movies.selectedMovieOrShows;
export default MovieSlice.reducer;