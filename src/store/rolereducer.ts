import {createSlice,PayloadAction} from "@reduxjs/toolkit";

enum RoleEnum {
    "Unknown Personnel",
    "Guest",
    "Student",
   "Developer",
    "Executive Personnel"
}

const initialState ={
    role: RoleEnum[0]
}
export const roleReducer = createSlice({
    name: "role",
    initialState,
    reducers:{
        setRole: (state, action: PayloadAction<number>)=>{
            state.role = RoleEnum[action.payload]

        }
    }
});
export const {setRole} = roleReducer.actions;


export default roleReducer.reducer
