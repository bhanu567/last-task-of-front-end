import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  inbox: true,
  unread: false,
  starred: false,
  drafts: false,
  sent: false,
  archieve: false,
  spam: false,
  deleted: false,
  photos: false,
  documents: false,
  subscription: false,
  deals: false,
  travel: false,
  newFolder: false,
};
const buttonSlice = createSlice({
  name: "buttonActive",
  initialState: initialStates,
  reducers: {
    setInbox(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.inbox = true;
    },
    setUnread(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.unread = true;
      console.log(state);
    },
    setStarred(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.starred = true;
      console.log(state);
    },
    setDrafts(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.drafts = true;
      console.log(state);
    },
    setSent(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.sent = true;
      console.log(state);
    },
    setArchieve(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.archieve = true;
      console.log(state);
    },
    setSpam(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.spam = true;
      console.log(state);
    },
    setDeleted(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.deleted = true;
      console.log(state);
    },
    setPhotos(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.photos = true;
      console.log(state);
    },
    setDocuments(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.documents = true;
      console.log(state);
    },
    setSubscription(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.subscription = true;
      console.log(state);
    },
    setDeals(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.deals = true;
      console.log(state);
    },
    setTravel(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.travel = true;
      console.log(state);
    },
    setNewFolder(state) {
      Object.entries(state).forEach(([key, value]) => {
        if (value) {
          state[key] = false;
        }
      });
      state.newFolder = true;
      console.log(state);
    },
  },
});

export const buttonActions = buttonSlice.actions;

export default buttonSlice.reducer;
