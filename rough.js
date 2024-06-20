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
function setInbox() {
  Object.entries(initialStates).forEach(([key, value]) => {
    if (value) {
      initialStates[key] = false;
      console.log(value);
    }
  });
  initialStates.inbox = true;
  console.log(initialStates);
}
setInbox();

// const obj = { a: 5, b: 7, c: 9 };
// // for (const [key, value] of Object.entries(obj)) {
// //   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// // }

// // Using array methods
// Object.entries(obj).forEach((key, value) => {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// });