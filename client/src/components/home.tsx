import { useAppSelector } from '../store/hooks';

export function Home() {
  const auth = useAppSelector((state) => state.auth);

  return (
    <div className="container">
      <h1 className="mt-5">Home</h1>
      <h3>{auth.id}</h3>
      <h3>{auth.username}</h3>
      <h3>{auth.email}</h3>
    </div>
  );
}
