export const authInitialState = {
  ...(localStorage.getItem("encodedToken") !== null
    ? {
        user: JSON.parse(localStorage.getItem("user")),
        isLoggedIn: true,
      }
    : {
        user: {},
        isLoggedIn: false,
      }),
  error: "",
  message: "",
};

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
        message: payload.message,
      };

    case "LOGOUT":
      return {
        user: {},
        isLoggedIn: false,
        error: "",
        message: payload.message,
      };

    case "FAILED":
      return { ...state, error: payload.error };

    case "CLEAR_MSG":
      return { ...state, message: "" };

    case "CLEAR_ERROR":
      return { ...state, error: "" };

    default:
      return state;
  }
};
