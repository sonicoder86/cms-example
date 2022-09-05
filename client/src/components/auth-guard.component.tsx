import { Navigate } from "react-router-dom";
import { useAppSelector } from '../store/hooks';

export function AuthGuardComponent({ children }: { children: JSX.Element }) {
  const auth = useAppSelector((state) => state.auth);

  if (!auth.loggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}
