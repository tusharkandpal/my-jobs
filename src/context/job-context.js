import { createContext, useContext, useReducer, useEffect } from "react";
import { jobInitialState, jobReducer } from "../reducer/reducer";
import { useAuth } from "../context/context";
import { getJobs, getJobApplicants } from "../services/service";

const JobContext = createContext({});

const JobProvider = ({ children }) => {
  const [jobState, jobDispatch] = useReducer(jobReducer, jobInitialState);
  const { pageNumber, selectedJobId } = jobState;
  const {
    authState: { isLoggedIn },
  } = useAuth();

  // Get Jobs
  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        try {
          const jobsResponse = await getJobs(pageNumber);
          jobDispatch({ type: "SET_JOBS", payload: { jobs: jobsResponse } });
        } catch (error) {
          console.error(error.data.message);
        }
      }
    })();
  }, [isLoggedIn, pageNumber]);

  // Get Job Applicants
  useEffect(() => {
    (async () => {
      if (selectedJobId) {
        try {
          const applicantsResponse = await getJobApplicants(selectedJobId);
          jobDispatch({
            type: "SET_APPLICANTS",
            payload: { applicants: applicantsResponse },
          });
        } catch (err) {
          console.error(err.data.message);
        }
      }
    })();
  }, [selectedJobId]);

  return (
    <JobContext.Provider
      value={{
        jobState,
        jobDispatch,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

const useJob = () => useContext(JobContext);

export { JobProvider, useJob };
