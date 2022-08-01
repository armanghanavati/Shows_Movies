import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../component/MovieSlice/MovieSlice";

export const store = configureStore({
    reducer:{
        movies:MovieReducer
    }
})