export const SEND_APPLICATION = "SEND_APPLICATION";

export const sendApplication = (user, application) => ({
  type: SEND_APPLICATION,
  user,
  application
});
