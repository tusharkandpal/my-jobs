import { Link } from "react-router-dom";
import { AboutUs } from "../../components/components";

const Home = () => {

  return (
    <div className="home">
      <div className="bg-gray-900 h-80 flex justify-around">
        <div className="text-stone-50 flex flex-col items-start justify-evenly">
          <p className="text-5xl w-64 text-left leading-tight">
            Welcome to My<span className="text-sky-400">Jobs</span>
          </p>
          <Link className="bg-sky-400 py-2 px-5 rounded font-bold" to="/jobs">
            Get Started
          </Link>
        </div>
        <img className="-mb-44" src="./assets/home-pic.png" loading="lazy" alt="job-portal" />
      </div>
      <AboutUs />
    </div>
  );
};

export { Home };
