import { useJob } from "../../context/context";
import { ApplicantCard } from "../components";

const ApplicantsModal = () => {
  const {
    jobState: { showModal, jobApplicants },
    jobDispatch,
  } = useJob();

  return (
    <>
      {showModal && (
        <div
          className="flex items-center justify-center fixed inset-0 p-2 drop-shadow-2xl"
          onClick={() =>
            jobDispatch({
              type: "SET_MODAL",
              payload: { setShowModal: false },
            })
          }
        >
          <div
            className="flex flex-col rounded-md bg-white p-5 min-w-[37rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between pb-3 font-bold border-b">
              <span className="text-xl text-gray-500">
                Applicants for this job
              </span>
              <button
                className="text-gray-800 font-bold"
                onClick={() =>
                  jobDispatch({
                    type: "SET_MODAL",
                    payload: { setShowModal: false },
                  })
                }
              >
                X
              </button>
            </div>

            <h3 className="my-3">Total {jobApplicants.length} applications</h3>

            <div className="flex flex-wrap gap-3 p-2 w-[35rem] rounded-md max-h-96 overflow-y-auto bg-slate-200">
              {jobApplicants.length !== 0 ? (
                jobApplicants.map((applicant) => (
                  <ApplicantCard key={applicant.id} {...applicant} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center mx-auto h-80">
                  <img
                    src="./assets/curriculum.svg"
                    alt="curriculum"
                    className="text-center"
                  />
                  <p className="text-gray-800 pt-2 pb-5">
                    No applications available!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ApplicantsModal };
