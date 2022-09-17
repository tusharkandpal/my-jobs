import axiosConfig from "./axiosConfig";

export const getJobApplicants = async (jobId) => {
  try {
    const { data } = await axiosConfig.get(
      `/recruiters/jobs/${jobId}/candidates`,
      {
        headers: { Authorization: localStorage.getItem("encodedToken") },
      }
    );
    if (data.code === 200) return data?.data ?? [];
  } catch (error) {
    return Promise.reject(error.response);
  }
};
