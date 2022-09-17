import axiosConfig from "./axiosConfig";

export const loginService = async (emailId, password) => {
  try {
    const {
      data: { data },
    } = await axiosConfig.post("/auth/login", {
      email: emailId,
      password,
    });
    const { id, name, createdAt, email, skills } = data;
    localStorage.setItem("encodedToken", data.token);
    localStorage.setItem(
      "user",
      JSON.stringify({ id, name, createdAt, email, skills })
    );
    return data;
  } catch (error) {
    return Promise.reject(error.response);
  }
};
