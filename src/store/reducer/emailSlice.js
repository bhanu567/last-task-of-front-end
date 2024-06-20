import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: [],
  unread: 0,
  totalEmails: 0,
  changed: false,
};

const emailSlice = createSlice({
  name: "Email",
  initialState: initialState,
  reducers: {
    fetchEmail(state, action) {
      if (action.payload !== null) {
        state.emails = action.payload.emails;
        state.unread = Number(action.payload.unread);
        state.totalEmails = Number(action.payload.totalEmails);
      } else {
        state.emails = [];
        state.unread = 0;
        state.totalEmails = 0;
      }
    },
    addEmail(state, action) {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const date = new Date().toLocaleTimeString("en-us", options);
      const dateArray = date.split(", ");
      const newEmails = {
        emailID: action.payload.emailID,
        message: action.payload.message,
        unread: true,
        time: dateArray,
      };
      state.emails.push(newEmails);
      state.unread += 1;
      state.totalEmails += 1;
      state.changed = true;
    },
    messageUpdateState(state, action) {
      if (state.unread > 0) {
        state.emails[action.payload].unread = false;
        state.unread -= 1;
      }
      state.changed = true;
    },
    deleteEmail(state, action) {
      const unread = state.emails[action.payload].unread;
      if (unread) {
        state.unread -= 1;
      }
      state.emails.splice(action.payload, 1);
      state.totalEmails -= 1;
      state.changed = true;
    },
  },
});

export const emailActions = emailSlice.actions;

export default emailSlice.reducer;
