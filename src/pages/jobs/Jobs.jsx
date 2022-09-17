import { Link } from "react-router-dom";
import { ApplicantsModal, JobCard } from "../../components/components";
import { useJob } from "../../context/context";

const Jobs = () => {
  const {
    jobState: { jobs, pageNumber },
    jobDispatch,
  } = useJob();

  return (
    <>
      <div className="pt-2 text-stone-50 bg-gray-900 grow">
        <div className="px-36 h-40">
          <Link to="/" className="">
            🏠 Home
          </Link>
          <p className="text-2xl font-medium pt-5">Jobs posted by you</p>
        </div>
        <div className="relative bg-sky-100 h-[70rem]">
          {jobs.length !== 0 ? (
            <div className="px-36 absolute -top-12 flex flex-col items-center w-full">
              <div className="flex flex-wrap justify-center gap-5 pb-5">
                {jobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
              <div className="flex pt-5">
                <button
                  className={`border text-gray-400 ${
                    pageNumber === 1 && "text-gray-300"
                  } border-gray-400 p-2 rounded-md font-bold`}
                  onClick={() => {
                    if (pageNumber > 1) jobDispatch({ type: "DECREMENT_PAGE" });
                  }}
                >
                  &#60;
                </button>
                <span className="font-bold p-2 mx-2 rounded-md text-gray-800 bg-sky-200 w-10 text-center">
                  {pageNumber}
                </span>
                <button
                  className={`border border-gray-400 text-gray-400 ${
                    pageNumber === 7 && "text-gray-300"
                  } p-2 rounded-md font-bold`}
                  onClick={() => {
                    if (pageNumber < 7) jobDispatch({ type: "INCREMENT_PAGE" });
                  }}
                >
                  &#62;
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center pt-20">
              <img src="./assets/writing.svg" alt="writing" className="" />
              <p className="text-gray-800 pt-2 pb-5">
                Your posted jobs will show here!
              </p>
              <button className="py-2 px-5 bg-sky-400 rounded-md">
                Post a Job
              </button>
            </div>
          )}
        </div>
      </div>
      <ApplicantsModal />
    </>
  );
};

export { Jobs };
