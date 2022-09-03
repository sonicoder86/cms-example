import { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../services/api';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/auth';

export function Login() {
  const api = new Api();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userNameId = useId();
  const passwordId = useId();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('secret');

  const handleLogin = async () => {
    try {
      const response = await api.login(username, password);
      dispatch(login(response))
      navigate('/home');
    } catch (e) {
      window.alert('Failed to login');
    }
  }

  return (
    <div className="container">
      <h1 className="mt-5">Login</h1>

      <div className="row g-5">
        <div className="col-md-12 col-lg-12">
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-sm-6">
                <label
                  htmlFor={userNameId}
                  className="form-label"
                >
                  Username
                </label>
                <input
                  onInput={e => setUsername((e.target as HTMLInputElement).value)}
                  value={username}
                  id={userNameId}
                  type="text"
                  className="form-control"
                />
                <div className="invalid-feedback">
                  Valid username is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label
                  htmlFor={passwordId}
                  className="form-label"
                >
                  Password
                </label>
                <input
                  onInput={e => setPassword((e.target as HTMLInputElement).value)}
                  value={password}
                  id={passwordId}
                  type="password"
                  className="form-control"
                />
                <div className="invalid-feedback">
                  Valid password is required.
                </div>
              </div>

            </div>

            <hr/>

            <button onClick={handleLogin} className="w-50 btn btn-primary btn-lg" type="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
