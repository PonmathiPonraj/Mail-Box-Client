import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
    name: "mail",
    initialState: {
        allMails: [],
        sentMails:[],
        receivedMails:[],
        deletedMails:[],
    },
    reducers: {
        addMail(state, action) {
            console.log(action.payload);
        }
    }
});

export const mailAction = mailSlice.actions;
export default mailSlice;