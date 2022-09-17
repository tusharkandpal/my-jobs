import { useJob } from "../../context/context";

const JobCard = ({ id, title, description, location }) => {
  const {
    jobState: { selectedJobId },
    jobDispatch,
  } = useJob();

  return (
    <div className="flex flex-col px-4 py-2 justify-around drop-shadow-md rounded-md w-72 h-48 bg-white text-black">
      <p className="text-xl">
        {title.length > 20 ? `${title.substring(0, 20)}...` : title}
      </p>
      <p className="break-all text-gray-500">
        {description.length > 80
          ? `${description.substring(0, 80)}...`
          : description}
      </p>
      <div className="flex items-center justify-between mt-3">
        <div>
          <img
            src="./assets/Icon material-location-on.svg"
            alt="location-icon"
            className="inline pr-2"
            loading="lazy"
          />
          <span>
            {location.length > 10
              ? `${location.substring(0, 10)}...`
              : location}
          </span>
        </div>
        <button
          className="p-2 rounded-md bg-sky-100"
          onClick={() => {
            if (selectedJobId !== id)
              jobDispatch({ type: "SET_JOB_ID", payload: { jobId: id } });

            jobDispatch({ type: "SET_MODAL", payload: { setShowModal: true } });
          }}
        >
          View Applications
        </button>
      </div>
    </div>
  );
};

export { JobCard };
