export const jobInitialState = {
  jobs: [],
  showModal: false,
  selectedJobId: "",
  pageNumber: 1,
  jobApplicants: [],
};

export const jobReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: payload.jobs,
      };

    case "SET_JOB_ID":
      return {
        ...state,
        selectedJobId: payload.jobId,
      };

    case "SET_APPLICANTS":
      return {
        ...state,
        jobApplicants: payload.applicants,
      };

    case "INCREMENT_PAGE":
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };

    case "DECREMENT_PAGE":
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      };

    case "SET_MODAL":
      return {
        ...state,
        showModal: payload.setShowModal,
      };

    case "RESET":
      return jobInitialState;

    default:
      return state;
  }
};
