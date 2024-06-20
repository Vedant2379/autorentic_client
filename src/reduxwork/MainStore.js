import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./UserSlice"

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
//import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: 'cart',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const MainStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})