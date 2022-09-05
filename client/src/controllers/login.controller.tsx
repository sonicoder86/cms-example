import { useId, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAppSelector } from '../store/hooks';
import { resetFailedLogins } from '../store/reducers/auth.reducer';
import { config } from '../config';
import { useDispatch } from 'react-redux';
import { useLoginThunk } from '../store/thunks/login.thunk';

export function LoginController() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userNameId = useId();
  const passwordId = useId();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('adminsecret');
  const loginDisabled = auth.failedLogins >= config.loginAttempts;
  const loginThunk = useLoginThunk(username, password);

  const handleLogin = async () => {
    dispatch(loginThunk);
  };

  const handleCaptchaSuccess = (e) => {
    dispatch(resetFailedLogins());
  };

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

            {loginDisabled &&
              <div className="row g-3">
                <div className="col-12">
                  <ReCAPTCHA
                    sitekey={config.captchaKey}
                    onChange={handleCaptchaSuccess}
                  />
                </div>
              </div>
            }

            <hr/>

            <button onClick={handleLogin} disabled={loginDisabled} className="w-50 btn btn-primary btn-lg" type="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
