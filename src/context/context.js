import { AuthProvider } from "./auth-context";
import { JobProvider } from "./job-context";
export { useAuth } from "./auth-context";
export { useJob } from "./job-context";

export function ContextProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <JobProvider>{children}</JobProvider>
      </AuthProvider>
    </>
  );
}
