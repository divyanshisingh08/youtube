import { createSlice } from "@reduxjs/toolkit";
import { live_Messages_Count } from "./constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages: []
    },
    reducers:{
        addMessage:(state,action)=>{
            //it will restric no of messages to live_Messages_Count=10; = 10 (constant file) and remove 1 message from top
            state.messages.splice(live_Messages_Count,1);

            state.messages.unshift(action.payload);
            //push messages from back
        }

    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;