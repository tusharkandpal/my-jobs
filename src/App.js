import "./App.css";
import { Nav, Toast } from "./components/components";
import { useAuth } from "./context/auth-context";
import { RouterWrapper } from "./router/RouterWrapper";

function App() {
  const {
    authState: { message },
  } = useAuth();

  return (
    <div className="App relative">
      <Nav />
      <main className="flex">
        <RouterWrapper />
      </main>
      {message && <Toast />}
    </div>
  );
}

export default App;
