import { useAuth } from "../../context/context";

const Toast = () => {
  const {
    authState: { isLoggedIn, message },
  } = useAuth();

  return (
    <div className=" bg-white p-3 absolute top-20 right-12 rounded-md">
      <div className="flex justify-between">
        <span className="text-sky-400 text-xl font-bold">
          {isLoggedIn ? "Login" : "Logout"}
        </span>
        <span className="text-gray-800 font-bold">X</span>
      </div>
      <p className="text-gray-500 py-1">{message}</p>
    </div>
  );
};

export { Toast };
