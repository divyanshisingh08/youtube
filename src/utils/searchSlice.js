import { createSlice } from "@reduxjs/toolkit";


//to cache our search results

const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            //Merge two states
            /** { "ip" :["iphone", "iphone pro max", "iphone 15"]} */
            state= Object.assign( state,action.payload );

        }

    }
})

export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;