import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface floorAcces {
    flooraccess: boolean[]


}
const initialState: floorAcces = {
    flooraccess: [false, false, false, false, false]
}

export const floorReducer = createSlice({
    name: "floorreducer",
    initialState,
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            state.flooraccess[action.payload] = !state.flooraccess[action.payload];
        }
    }
})
export const { changeAccess } = floorReducer.actions;

export default floorReducer.reducer