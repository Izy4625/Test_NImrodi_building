import { configureStore } from "@reduxjs/toolkit";
import roleReducer  from "./rolereducer";
import  floorReducer  from "./floorreducer";

export const store = configureStore({
    reducer: {

        floorreducer: floorReducer,
        role: roleReducer
        
    }
});
export type RootState = ReturnType<typeof store.getState>;