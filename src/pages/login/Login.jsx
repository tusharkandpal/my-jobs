import { useAuth } from "../../context/auth-context";
import { loginService } from "../../services/service";
import { useNavigate } from "react-router-dom";
import { useJob } from "../../context/context";

const Login = () => {
  const {
    authState: { error },
    authDispatch,
  } = useAuth();
  const { jobDispatch } = useJob();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const [emailId, password] = e.target.elements;

    if (emailId.value && password.value) {
      try {
        const data = await loginService(emailId.value, password.value);
        authDispatch({
          type: "LOGIN",
          payload: { user: data, message: "You have successfully logged in." },
        });
        setTimeout(() => {
          authDispatch({ type: "CLEAR_MSG" });
        }, 1500);
        jobDispatch({
          type: "RESET",
        });
        navigate("/jobs", { replace: true });
      } catch (error) {
        authDispatch({
          type: "FAILED",
          payload: { error: error.data.message },
        });
        setTimeout(() => {
          authDispatch({ type: "CLEAR_ERROR" });
        }, 1500);
      }
    }
  };

  return (
    <div className="grow">
      <div className="relative min-h-[15rem] bg-gray-900">
        <form
          className="flex flex-col justify-content absolute m-auto left-0 right-0 top-10 rounded-lg bg-stone-50 pt-8 px-8 pb-20 drop-shadow-lg max-w-[28rem]"
          onSubmit={loginHandler}
        >
          <p className="text-xl font-medium">Login</p>
          <label className="mt-5 mb-1" htmlFor="emailId">
            Email address
          </label>
          <input
            id="emailId"
            type="email"
            className={`min-w-full p-2 bg-gray-100 outline ${
              error ? "outline-red-400" : "outline-sky-400"
            } rounded-sm`}
          />
          <label className="mt-5 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`min-w-full p-2 bg-gray-100 outline ${
              error ? "outline-red-400" : "outline-sky-400"
            } rounded-sm`}
          />
          <p className="text-red-400 text-right mt-2 mb-4 h-8">{error}</p>
          <button
            className="bg-sky-400 text-stone-50 rounded-md py-2 px-14 mx-auto"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="h-[24.9rem] bg-sky-100"></div>
    </div>
  );
};

export { Login };
