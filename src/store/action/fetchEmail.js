import { emailActions } from "../reducer/emailSlice";

export const fetchEmail = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://mail-box-client-61486-default-rtdb.asia-southeast1.firebasedatabase.app/email.json"
      );
      const responseJSON = await response.json();
      dispatch(emailActions.fetchEmail(responseJSON));
    } catch (error) {
      alert(error.message);
    }
  };
};
