import { MouseEventHandler } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/reducers/auth.reducer';
import { AuthApiService } from '../services/auth-api.service';

export function Menu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authApi = new AuthApiService();
  const auth = useAppSelector((state) => state.auth);
  const isAdmin = auth.loggedIn && auth.roles.includes('administrator');
  const isEditor = auth.loggedIn && auth.roles.includes('content_editor');
  const isSignedIn = auth.loggedIn && auth.roles.includes('signed_in');

  const handleLogout: MouseEventHandler<HTMLAnchorElement> = async (e) => {
    e.preventDefault();
    await authApi.logout(auth.token);
    dispatch(logout())
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CMS Example</a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {(isAdmin || isSignedIn) && (
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
            )}
            {(isAdmin || isEditor) && (
              <li className="nav-item">
                <Link className="nav-link" to="/content">Content</Link>
              </li>
            )}
            {!auth.loggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
              </li>
            )}
            {auth.loggedIn && (
              <li className="nav-item">
                <a onClick={handleLogout} className="nav-link" href="#">Logout</a>
              </li>
            )}
          </ul>

          {auth.loggedIn && (
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                {`${auth.username} (${auth.email} as ${auth.roles.join(',')})`}
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
