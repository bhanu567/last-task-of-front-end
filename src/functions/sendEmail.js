import emailjs from "@emailjs/browser";

const savingToFirebase = async (email, message) => {
  try {
    await fetch(
      "https://mail-box-client-61486-default-rtdb.asia-southeast1.firebasedatabase.app/email.json",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const sendEmailRestAPI = async (email, message) => {
  const data = {
    service_id: "service_9p1sgjn",
    template_id: "template_pr2latc",
    user_id: "2TIfKiBGotKql32GV",
    template_params: {
      from_name: email.substring(0, email.indexOf("@")),
      from_email: email,
      to_name: "Bhanu",
      message: message,
    },
  };
  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      try {
        await savingToFirebase(email, message);
      } catch (error) {
        throw error;
      }
    }
  } catch (error) {
    throw error;
  }
};

export const sendEmailReact = async (email, message) => {
  const template_params = {
    from_name: email.substring(0, email.indexOf("@")),
    from_email: email,
    to_name: "Bhanu",
    message: message,
  };
  emailjs
    .send("service_9p1sgjn", "template_pr2latc", template_params, {
      publicKey: "2TIfKiBGotKql32GV",
    })
    .then(
      async () => {
        try {
          await savingToFirebase(email, message);
        } catch (error) {
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    );
};
