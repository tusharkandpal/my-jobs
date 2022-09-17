import axiosConfig from "./axiosConfig";

export const getJobs = async (pageNo) => {
  try {
    const { data } = await axiosConfig.get(`/recruiters/jobs?page=${pageNo}`, {
      headers: { Authorization: localStorage.getItem("encodedToken") },
    });
    if (data.code === 200) return data?.data?.data ?? [];
  } catch (error) {
    return Promise.reject(error.response);
  }
};
